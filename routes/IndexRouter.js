var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/:login?', indexController.showFollowers)

module.exports = router;