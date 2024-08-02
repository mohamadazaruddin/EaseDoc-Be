const {
  createConsultation,
  getConsultation,
  getConsultationsByDoctor,
} = require("../service/consultation.service");

exports.addConsultation = (req, res) => {
  createConsultation(req, res);
};
exports.getConsultation = (req, res) => {
  getConsultation(req, res);
};
exports.getConsultationsByDoctor = (req, res) => {
  getConsultationsByDoctor(req, res);
};
