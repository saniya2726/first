var express = require('express');
var router = express.Router();
var saniya = require("../controller/usercontroller");

router.post('/', saniya.insert);
router.get('/', saniya.get_data);
module.exports = router;
