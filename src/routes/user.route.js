const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/user.controller");

router.get("/", auth, function (req, res) {
  userController.getdata(req, res);
});

// creating user
router.post("/signup", function (req, res) {
  userController.createUser(req, res);
});

// login user
router.post("/login", function (req, res) {
  userController.userLogin(req, res);
});

module.exports = router;
