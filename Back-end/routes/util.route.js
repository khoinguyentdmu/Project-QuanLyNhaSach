var express = require('express');
const checkAuth = require('../middleware/check-auth');

var router = express.Router();

// Require the controllers
var util_controller = require('../controllers/util.controller');

router.post('/checkTheLoginStatus', checkAuth, util_controller.checkTheLoginStatus);

module.exports = router;