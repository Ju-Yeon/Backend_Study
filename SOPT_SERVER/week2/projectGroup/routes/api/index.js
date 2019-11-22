var express = require('express');
var router = express.Router();

router.use('/group',require('./group'));

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
