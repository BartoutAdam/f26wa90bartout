var express = require('express');
var router = express.Router();

var vOne = 123;
var vTwo = 60;

/* GET users resource. */
router.get('/', function(req, res, next) {
  if (vOne > vTwo) {
    vOne = vOne - vTwo;
  } else if (vTwo > vOne) {
    vTwo = vTwo - vOne;
  }

  res.send(`Values are: ${vOne} and ${vTwo}`);
});

module.exports = router;