const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const Student = require('../models/student.model');
const Staff = require('../models/staff.model');

passport.use('local', new LocalStrategy({
  passReqToCallback: true, // set to access the request data
}, async (req, username, password, cb) => {
  try {
    const portal = req.params.portal;
    let data;

    if (portal === 'student' || portal === 'parent') {
      data = await Student.findByMatric(username);
    } else if (portal === 'staff') {
      data = await Staff.findByStaffNumber(username);
    }

    if (data.user.isLoggedIn) {
      // User is already logged in, prevent multiple logins
      return cb(null, false, { message: 'User is already logged in.' });
    }

    if (portal === 'student' || portal === 'parent') {
      await Student.updateLoginStatus(data.user.id, { isLoggedIn: true });
    } else {
      await Staff.updateLoginStatus(data.user.id, { isLoggedIn: true });
    }

    if (data) {
      if (!bcrypt.compareSync(password, data.user.password)) {
        return cb(null, false, { message: 'Incorrect password' });
      }
      return cb(null, data);
    }

    return cb(null, false, { message: 'Incorrect username' });
  } catch (err) {
    return cb(null, false, { message: 'No user with this matric'});
  }
}));

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.user.id });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

module.exports = passport;
