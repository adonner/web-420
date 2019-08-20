/*
============================================
; Title: authController.js
; Author: Adam Donner
; Date: 9 July 2019
; Description:  authController.js
;===========================================
*/

// start program

// Declare the User variable and import the user model
var User = require('../models/user');
// Declare the jwt variable and import jsonwebtoken module
var jwt = require('jsonwebtoken');
// Declare the bcrypt variable and import bcryptjs module
var bcrypt = require('bcryptjs');
// Declare the config variable and import the config model
var config = require('../config');

exports.user_register = function(req, res) {
  // Using the bcrypt hashSync method for the password for the new user
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  // Declare the newUser and set the object to the values from the request
  var newUser = new User({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email
  });

  // Add the user document to the collection
  User.add(newUser, (err, user) => {
    // If there was an error handle it
    if(err){
      // Return a server error, 500 and a message to the user.
      return res.status(500).send('There was a problem registering the user.');
    }

    var token = jwt.sign({id: user._id}, config.web.secret, {
      expiresIn: 86400 // 24 hours
    });

    // Render a message to the response
    res.status(200).send({auth: true, token: token});
  });
};

exports.user_token = function(req, res) {
  // Call the getById method on the mongoose model
  User.getById(req.userId, function(err, user){
    // if there is an error return a 500, server error with a message
    if(err){
      return res.status(500).send('There was a problem finding the user.')
    }

    // if the user is not defined return a 404 status code
    if(!user){
      return res.status(404).send('No user found.');
    }

    // Return the 200 status code, OK and the user
    res.status(200).send(user);

  });
};


exports.user_login = function(req, res){

  User.getOne(req.body.username, function(err, user){

    if(err) return res.status(500).send("Error on server");
    if(!user) return res.status(404).send("No user found.");

    var passwordIsValid = bcrypt.compare(req.body.password, user.password);
    if(!passwordIsValid) return res.status(401).send({auth: false, token: null});

    var token = jwt.sign({id: user._id}, config.web.secret, {expiresIn: 86400});
    res.status(200).send({auth: true, token: token});

  });
};


exports.user_logout = function(req, res){
  res.status(200).send({auth: false, token: null});
};

// end program