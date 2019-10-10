var express = require('express');
var router = express.Router();

router.use('/api',require('./api'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* 직접구현부분
router.get('/blog', function(req, res, next) {
  res.render('index', { title: 'blog' });
});
*/
