const express = require('express');
const passport = require('passport');
const AppController = require('../controllers/appController');
const StudentController = require('../controllers/studentController');
const StaffController = require('../controllers/staffController');

const router = express.Router();

// post requests - CREATE
router.post('/signup', StudentController.addUser);

// get request - READ
router.get('/status', AppController.getStatus);
router.get('/student/me', passport.authenticate('session'), StudentController.getMe);
router.get('/staff/me', passport.authenticate('session'), StaffController.getMe);
router.get('/staffs', passport.authenticate('session'), StaffController.getAllStaffs);
router.get('/students', passport.authenticate('session'), StudentController.getAllStudents);
router.get('/student/:id', passport.authenticate('session'), StudentController.getStudent);

module.exports = router;
