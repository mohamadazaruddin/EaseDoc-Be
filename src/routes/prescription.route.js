const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const prescription = require("../controller/prescription.controller");

router.post("/", auth, function (req, res) {
  prescription.createPrescription(req, res);
});

module.exports = router;
