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
// Declare the express variable and import the express module
var express = require('express');
// Declare the router variable set to an instance of the express router
var router = express.Router();
// Declare the auth_controller variable and import the authController module
var auth_controller = require('../controllers/authController');

// Use the router post method to set the auth/register route
router.post('/auth/register', auth_controller.user_register);

// Use the router get method to set the auth/token route
router.get('/auth/token', auth_controller.user_token);

// Export the router
module.exports = router;

// end program