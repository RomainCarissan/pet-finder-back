const express = require("express");
const router = express.Router();
const User = require("./../models/User.model");

/**
 * ! All routes are prefixed by /api
 */

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", require("./auth.routes"));

router.use("/users", require("./users.routes"));
router.use("/lostpets", require("./lostpets.routes"));
router.use("/foundpets", require("./foundpets.routes"));

module.exports = router;
