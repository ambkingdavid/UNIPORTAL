const dbClient = require('../utils/db').Staff;
const { hashPassword } = require('../utils/helpers');
const { customLogger } = require('../utils/helpers');

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
    const staffsData = staffs.map((staff) => {
      const {
        password,
        createdAt,
        updatedAt,
        ...staffData
      } = staff.dataValues;
      return staffData;
    });

    return staffsData;
  }

  static async findStaff(query) {
    const staff = await dbClient.findOne(query);
    if (!staff) {
      throw new Error('No staff found');
    }
    const {
      password,
      createdAt: userCreatedAt,
      updatedAt: userUpdatedAt,
      ...staffData
    } = staff.dataValues;

    return staffData;
  }

  static async findByStaffNumber(staffNumber) {
    const staff = await dbClient.findOne({
      where: {
        staffNumber,
      },
    });
    if (!staff) {
      throw new Error('User not found');
    }
    const {
      password,
      createdAt: userCreatedAt,
      updatedAt: userUpdatedAt,
      ...staffData
    } = staff.dataValues;

    return staffData;
  }

  static async updateLoginStatus(staffId, query) {
    const staff = await dbClient.findByPk(staffId);

    if (!staff) {
      throw new Error('User not found');
    }

    Object.assign(staff, query);

    await staff.save();
    return staff.isLoggedIn;
  }

  static async changePassword(staffId, data) {
    const staff = await dbClient.findByPk(staffId);

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

    return staff.id;
  }
}

module.exports = Staff;
