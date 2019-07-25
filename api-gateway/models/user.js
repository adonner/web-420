/*
============================================
; Title: user.js
; Author: Adam Donner
; Date: 9 July 2019
; Description:  user.js
;===========================================
*/

// start program


var mongoose = require('mongoose');

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
}




// end program
