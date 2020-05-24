var express = require('express');
var router = express.Router();
const response = require('../Utility/response');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(response.createResponse("Success","Welcome to Node-Express"));
});

module.exports = router;
