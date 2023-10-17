const express = require('express');
const passport = require('../middlewares/auththentication');

const router = express.Router();

router.post('/login', passport.authenticate('local'),
  (req, res) => res.status(200).json(req.user));

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    return res.redirect('/');
  });
});

module.exports = router;
