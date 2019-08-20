/*
============================================
; Title: config.js
; Author: Adam Donner
; Date: 9 July 2019
; Description:  config.js
;===========================================
*/

// start program

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

config.web.secret = 'topsecret';

// end program