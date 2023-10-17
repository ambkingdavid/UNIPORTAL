const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

passport.use(new LocalStrategy(async (username, password, cb) => {
  try {
    const user = await User.findUserByUsernameOrEmail(username);
    if (user) {
      if (!bcrypt.compare(password, user.password)) {
        return cb(null, false, { message: 'Incorrect password' });
      }
      return cb(null, user);
    }

    return cb(null, false, { message: 'Incorrect username' });
  } catch (err) {
    return cb(err);
  }
}));

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

module.exports = passport;
