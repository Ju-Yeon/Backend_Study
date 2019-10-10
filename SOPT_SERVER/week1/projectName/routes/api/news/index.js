var express = require('express');
var router = express.Router();

router.use('/like',require('./like'));
router.use('/',require('./news'));

module.exports = router;