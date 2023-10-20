const Staff = require('../models/staff.model');

class StaffController {
  static async addStaff(req, res) {
    try {
      const staff = await Staff.add(req.body);
      res.status(200).send('Success');
    } catch (err) {
      res.status(500).send('Error: Server error')
    }
  }

  static async getAllStaffs(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const { page = 1, limit = 20 } = req.query;

    const offset = (page - 1) * limit;

    const staffs = await Staff.findAll({
      limit: +limit,
      offset,
    });
    return res.status(200).send(users);
  }

  static async getStaff(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const { id } = req.params;
    const staff = await Staff.find({ id });
    if (!staff) {
      return res.status(404).send({ error: 'Not found' });
    }
    return res.status(200).send(staff);
  }
}

module.exports = StaffController;