const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const storage = require('./storage/dbStorage.model');

class BaseModel extends Model {
  constructor(kwargs = {}) {
    super();

    // Customizable attributes
    this.id = kwargs.id || uuidv4();
    this.createdAt = kwargs.createdAt || new Date();
    this.updatedAt = kwargs.updatedAt || new Date();
  }

  async saveToDB() {
    try {
      await storage.save(this);
      return this;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BaseModel;
