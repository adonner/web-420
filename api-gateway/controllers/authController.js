/*
============================================
; Title: authController.js
; Author: Adam Donner
; Date: 9 July 2019
; Description:  authController.js
;===========================================
*/

// start program

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res) {
 res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
 res.send('NOT IMPLEMENTED: User token lookup GET');
};

// end program