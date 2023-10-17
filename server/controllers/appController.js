// app controller class
const dbClient = require('../config/sequelize.config');

class AppController {
  static async getStatus(req, res) {
    try {
      // Attempt to authenticate with the dbClient
      await dbClient.authenticate();
      res.status(200).json({ dbClient: 'Connected' });
    } catch (err) {
      res.status(500).json({ status: 'Database connection failed', error: err.message });
    }
  }
}

module.exports = AppController;
