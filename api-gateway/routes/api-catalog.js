/*
============================================
; Title: api-catalog
; Author: Adam Donner
; Date: 9 July 2019
; Description:  api-catalog
;===========================================
*/

/**
* API Routes
*/
// Declare the express variable and import the express
var express = require('express');
// Declare the router variable
var router = express.Router();
// Declare the auth_controller variable and import the authController
var auth_controller = require('../controllers/authController');

// Use the router post to set the auth/register route
router.post('/auth/register', auth_controller.user_register);

// Use the router get to set the auth/token route
router.get('/auth/token', auth_controller.user_token);

// Export the router
module.exports = router;

// Use the router post to allow user login requests
router.post('/auth/login', auth_controller.user_login);

// Use the router get to allow user logout requests
router.get('/auth/logout', auth_controller.user_logout);

// end program