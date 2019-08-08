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


var mongoose = require('mongoose');

// Creates User variable and exports
var User = mongoose.model('User', userSchema);
module.exports = User;

//Fields username, password, and email
var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});


module.exports = mongoose.model('User', userSchema);
  
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
