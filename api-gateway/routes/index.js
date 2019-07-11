/*
============================================
; Title: index.js
; Author: Adam Donner
; Date: 9 July 2019
; Description:  index.js
;===========================================
*/

// start program


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// end program