var express = require('express');
var router = express.Router();

/* GET computation resource. */
router.get('/', function(req, res, next) {
  var x = Math.random() * 100 + 1;

  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  var y = Math.log2(x);

  res.send(`Math.log2() applied to ${x} is ${y}`);
});

module.exports = router;