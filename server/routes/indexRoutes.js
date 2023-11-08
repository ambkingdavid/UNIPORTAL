const express = require('express');
const passport = require('passport');
const AppController = require('../controllers/appController');
const StudentController = require('../controllers/studentController');
const StaffController = require('../controllers/staffController');
const CourseController = require('../controllers/courseController');
const ProgramController = require('../controllers/programController');

const router = express.Router();

// post requests - CREATE
router.post('/student/signup', StudentController.addUser);
router.post('staff/signup', StaffController.addStaff);
router.post('/course/register', CourseController.addCourse);

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Get the server status
 *     description: Checks the server connection to database
 *     tags:
 *        - Status
 *     responses:
 *       200:
 *         description: Successful response.
 *       404:
 *         description: Users not found.
 */
router.get('/status', AppController.getStatus);

/**
 * @swagger
 * /student/me:
 *   get:
 *     summary: Get the current user's information.
 *     description: Retrieve information about the currently authenticated user.
 *     tags:
 *       - Student
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 loggedIn:
 *                   type: boolean
 *                   description: Indicates if the user is logged in.
 *               example:
 *                 loggedIn: true
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           text/plain:
 *             example:
 *                Error: Unauthorized
 */
router.get('/student/me', StudentController.getMe);

/**
 * @swagger
 * /staff/me:
 *   get:
 *     summary: Get the current user's information.
 *     description: Retrieve information about the currently authenticated user.
 *     tags:
 *       - Staff
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 loggedIn:
 *                   type: boolean
 *                   description: Indicates if the user is logged in.
 *               example:
 *                 loggedIn: true
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           text/plain:
 *             example:
 *                Error: Unauthorized
 */
router.get('/staff/me', StaffController.getMe);

/**
 * @swagger
 * /api/staffs:
 *   get:
 *     summary: Get a list of staff members.
 *     description: Retrieve a list of staff members from the database.
 *     tags:
 *       - Staff
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *         description: The number of staff members to retrieve per page.
 *     responses:
 *       200:
 *         description: List of staff members retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Staff'
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           text/plain:
 *             example:
 *                Error: Unauthorized
 */
router.get('/staffs', StaffController.getAllStaffs);
router.get('/students', StudentController.getAllStudents);
router.get('/student/:id', StudentController.getStudent);
router.get('/student/courses', StudentController.getStudentCourses);
router.get('/program/:id', ProgramController.getProgramInfo)

// put requests - UPDATE
router.put('/student/registerCourse', StudentController.registerCourses);
router.put('/student/profile', StudentController.updateStudentProfile);
router.put('/student/updatePassword', StudentController.updatePassword);
router.put('/staff/updatePassword', StaffController.updatePassword);

// delete requests - DELETE
// router.delete('/student', StudentController.deleteStudentAccount);
// router.delete('/staff', StaffController.deleteStaffAccount);

module.exports = router;
