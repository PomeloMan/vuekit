var express = require('express');
var router = express.Router();

router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

var login = require('../public/json/login.json');

router.post('/', function (req, res, next) {
    res.send(login);
});

module.exports = router;
