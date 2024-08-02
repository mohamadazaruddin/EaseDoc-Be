const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const consultation = require("../controller/consultation.controller");

router.get("/", auth, function (req, res) {
  consultation.getConsultation(req, res);
});
router.get("/:id", auth, function (req, res) {
  consultation.getConsultationsByDoctor(req, res);
});
router.post("/", auth, function (req, res) {
  consultation.addConsultation(req, res);
});
module.exports = router;
