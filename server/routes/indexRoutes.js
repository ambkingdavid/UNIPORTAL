const express = require('express');
const passport = require('passport');
const AppController = require('../controllers/appController');
const UserController = require('../controllers/userController');

const router = express.Router();

// post requests - CREATE
router.post('/signup', UserController.addUser);

// get request - READ
router.get('/status', AppController.getStatus);
router.get('/users', passport.authenticate('session'), UserController.getAllUsers);
router.get('/user/:id', passport.authenticate('session'), UserController.getUser);

module.exports = router;
