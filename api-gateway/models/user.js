/*
============================================
; Title: user.js
; Author: Adam Donner
; Date: 9 July 2019
; Description:  user.js
;===========================================
*/

// start program

//Require Statements



var mongoose = require("mongoose");
// Declare the schema
const Schema = mongoose.Schema;

// Define the employee schema with a first and last name
let userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

// Creates User variable and exports
var User = mongoose.model('User', userSchema);
module.exports = User;

  
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) =>{
  var query = {_id: id};
  User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
  var query = { username: e };
  User.findOne(query, callback);
}


// end program
