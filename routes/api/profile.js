var express = require("express");
var router = express.Router();

// @route  GET api/profile
// @desc   test route
// @access Public
router.get("/", (req, res) => {
  res.send("Profile test route");
});

module.exports = router;