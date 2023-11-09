const Result = require('../models/result.model');

class ResultController {
  static async getResult(req, res) {
    if (!req.user) {
      return res.status(401).send('Unauthorized');
    }

    try {
      const results = Result.getResults(req.user.id);

      return res.status(200).send(results);
    } catch (err) {
      return res.status(401).send('Unauthorized');
    }
  }
}

module.exports = ResultController;
