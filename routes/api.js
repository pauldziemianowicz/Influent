var express = require('express');
var router = express.Router();

// GET API
router.get('/api', function(req, res, next) {
  res.send(process.env.INSTAGRAM_CLIENT_ID);
});

module.exports = router;
