const { createPrescription } = require("../service/prescription.service");

exports.createPrescription = (req, res) => {
  createPrescription(req, res);
};
