const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/api/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/profile', usersCtrl.showSelectedClasses);
router.post('/', usersCtrl.bookClass);

/*---------- Protected Routes ----------*/


module.exports = router;