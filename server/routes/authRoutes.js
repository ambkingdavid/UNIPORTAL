const express = require('express');
const passport = require('../middlewares/auththentication');
const Student = require('../models/student.model');
const Staff = require('../models/staff.model');

const router = express.Router();

router.post('/:portal/login', passport.authenticate('local'),
  (req, res) => res.status(200).json(req.user));

router.post('/:portal/logout', async (req, res, next) => {
  const userId = req.user.id;
  const { portal } = req.params;
  req.logout(async (err) => {
    if (err) { return next(err); }
  });
  if (portal === 'student' || portal === 'parent') {
    await Student.updateLoginStatus(userId, { isLoggedIn: false })
  } else {
    await Staff.updateLoginStatus(userId, { isLoggedIn: false });
  }
  return res.status(200).send('User is logged out');
  
});

module.exports = router;
