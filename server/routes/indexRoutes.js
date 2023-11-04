const express = require('express');
const passport = require('passport');
const AppController = require('../controllers/appController');
const StudentController = require('../controllers/studentController');
const StaffController = require('../controllers/staffController');
const CourseController = require('../controllers/courseController');

const router = express.Router();

// post requests - CREATE
router.post('/student/signup', StudentController.addUser);
router.post('staff/signup', StaffController.addStaff);
router.post('/course/register', CourseController.addCourse);

// get request - READ
router.get('/status', AppController.getStatus);
router.get('/student/me', StudentController.getMe);
router.get('/staff/me', StaffController.getMe);
router.get('/staffs', StaffController.getAllStaffs);
router.get('/students', StudentController.getAllStudents);
router.get('/student/:id', StudentController.getStudent);
router.get('/student/courses', StudentController.getStudentCourses);

// put requests - UPDATE
router.put('/student/profile', StudentController.updateStudentProfile);
router.put('/student/updatePassword', StudentController.updatePassword);
router.put('/staff/updatePassword', StaffController.updatePassword);

// delete requests - DELETE
// router.delete('/student', StudentController.deleteStudentAccount);
// router.delete('/staff', StaffController.deleteStaffAccount);

module.exports = router;
