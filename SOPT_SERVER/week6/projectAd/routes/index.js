var express = require('express');
var router = express.Router();

router.use('/ad',require('./ad/index'));
router.use('/mypage',require('./mypage'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
