const dbClient = require('../utils/db').Staff

class Staff {
  static async add(data) {
    const kwargs = { ...data };
    if (kwargs.password) {
      kwargs.password = await hashPassword(kwargs.password);
    }
    let newUser;
    try {
      newUser = dbClient.build(kwargs);
      await newUser.validate();
      await newUser.save();
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        const message = '[Error] Table column data already exist';
        customLogger(message);
        throw err;
      }
    }
    return newUser;
  }

  static async findAllStaffs(query) {
    const staffs = await dbClient.findAll(query);
    if (staffs.length === 0) {
      throw new Error('No staffs found');
    }
    return staffs;
  }

  static async findStaff(query) {
    const staff = await dbClient.findOne(query);
    if (!staff) {
      throw new Error('No staff found');
    }
    return staff;
  }

  static async findByStaffNumber(staffNumber) {
    try {
      const staff = await dbClient.findOne({
        where: {
          staffNumber,
        },
      });
      if (!staff) {
        throw new Error('User not found');
      }
      return staff.dataValues;
    } catch (err) {
      throw err;
    }
  }

  static async updateLoginStatus(staffId, query) {
    try {
      const staff = await dbClient.findByPk(staffId);

      if (!staff) {
        throw new Error('User not found');
      }

      Object.assign(staff, query);

      await staff.save();
      return staff.isLoggedIn;
    } catch (err) {
      throw err
    }
  }


  static async changePassword(staffId, data) {
    try {
      const staff = await dbClient.findByPk(userId);

      if (!staff) {
        throw new Error('Staff not found');
      }

      if (data.email !== staff.email) {
        throw new Error('Incorrect email');
      }

      const newPassword = await hashPassword(data.password);

      const updatedPassword = {
        password: newPassword,
      };

      Object.assign(staff, updatedPassword);

      await staff.save();

      return user.id;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Staff;