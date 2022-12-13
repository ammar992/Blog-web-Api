const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController');




router.post('/registration',userController.userRegistration);
router.get('/login',userController.login);


module.exports = router;