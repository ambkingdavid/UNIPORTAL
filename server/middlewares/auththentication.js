const passport = require('passport');
const LocalStrategy = require('passport-local');
const Student = require('../models/student.model');
const Staff = require('../models/staff.model');

passport.use('local', new LocalStrategy({
  passReqToCallback: true,
}, async (req, username, password, cb) => {
  try {
    const { portal } = req.params;
    let data;

    if (portal === 'student' || portal === 'parent') {
      data = await Student.findByMatric({ matric: username });
      if (data && !Student.validatePassword(data.user.id, password)) {
        return cb(null, false, { message: 'Incorrect password' });
      }
    } else if (portal === 'staff') {
      data = await Staff.findByStaffNumber({ staffNumber: username });
      if (data && !Student.validatePassword(data.user.id, password)) {
        return cb(null, false, { message: 'Incorrect password' });
      }
    }

    if (data && data.user.isLoggedIn === true) {
      return cb(null, false, { message: 'User is already logged in.' });
    }

    if (portal === 'student' || portal === 'parent') {
      await Student.updateLoginStatus(data.user.id, { isLoggedIn: true });
    } else {
      await Staff.updateLoginStatus(data.user.id, { isLoggedIn: true });
    }

    return cb(null, data);
  } catch (err) {
    return cb(null, false, { message: 'No user with this matric' });
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
