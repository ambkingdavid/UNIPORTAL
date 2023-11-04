const passport = require('passport');
const LocalStrategy = require('passport-local');
const Student = require('../models/student.model');
const Staff = require('../models/staff.model');

passport.use('local', new LocalStrategy({
  passReqToCallback: true,
}, async (req, username, password, cb) => {
  const { portal } = req.params;
  try {
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
