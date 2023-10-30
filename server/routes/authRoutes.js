const express = require('express');
const passport = require('../middlewares/auththentication');
const Student = require('../models/student.model');
const Staff = require('../models/staff.model');

const router = express.Router();

router.post('/:portal/login', passport.authenticate('local'),
  (req, res) => res.status(200).json(req.user));

router.post('/:portal/logout', async (req, res, next) => {
  if (req.user && req.user.id) {
    const userId = req.user.id;
    const { portal } = req.params;

    if (portal === 'student' || portal === 'parent') {
      await Student.updateLoginStatus(userId, { isLoggedIn: false });
    } else {
      await Staff.updateLoginStatus(userId, { isLoggedIn: false });
    }

    req.logout((err) => {
      if (err) {
        return next(err);
      }

      return res.status(200).send('User is logged out');
    });
  } else {
    // If req.user is not defined, simply respond with a message
    return res.status(200).send('User is logged out');
  }
  return null;
});

module.exports = router;
