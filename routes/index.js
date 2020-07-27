var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('app', { title: 'projectt' });
});

module.exports = router;