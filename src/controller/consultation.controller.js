const { createConsultation } = require("../service/consultation.service");

exports.addConsultation = (req, res) => {
  createConsultation(req, res);
};
