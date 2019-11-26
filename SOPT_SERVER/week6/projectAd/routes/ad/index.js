var express = require('express');
var router = express.Router();

router.use('/banner',require('./banner'));
router.use('/notice',require('./notice'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});


module.exports = router;
