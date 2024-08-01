const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const consultation = require("../controller/consultation.controller");

router.post("/", auth, function (req, res) {
  consultation.addConsultation(req, res);
});

module.exports = router;
