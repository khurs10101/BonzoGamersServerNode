var express = require("express");
var router = express.Router();

// @route  GET api/posts
// @desc   test route
// @access Public
router.get("/", (req, res) => {
  res.send("Posts test route");
});

module.exports = router;