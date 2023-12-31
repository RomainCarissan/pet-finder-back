const router = require("express").Router();
const User = require("../models/User.model");

// find all users.
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find().select("email");
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// find specific users by id.
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneUser = await User.findOne({ _id: id });
    res.json(oneUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
