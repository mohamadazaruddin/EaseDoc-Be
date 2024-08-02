const Consultation = require("../model/Consultations");
const createConsultation = async (req, res) => {
  const {
    patient,
    doctor,
    current_illness,
    family_history,
    recent_surgery,
    others,
    allergies,
  } = req.body;

  // Validate required fields
  if (!patient || !doctor || !current_illness || !family_history) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newConsultation = new Consultation({
      patient,
      doctor,
      current_illness,
      others,
      allergies,
      family_history,
      recent_surgery, // This will be undefined if not provided, which is fine
    });

    const savedConsultation = await newConsultation.save();
    res.status(201).json(savedConsultation);
  } catch (error) {
    console.error("Error saving consultation:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
const getConsultation = async (req, res) => {
  const { doctorId, patientId } = req.query;

  // Validate required query parameters
  if (!doctorId || !patientId) {
    return res
      .status(400)
      .json({ message: "doctorId and patientId are required." });
  }

  try {
    // Find consultations that match both doctorId and patientId
    const consultations = await Consultation.find({
      doctor: doctorId,
      patient: patientId,
    });

    if (consultations.length === 0) {
      return res.status(404).json({
        message: "No consultations found for the given doctor and patient.",
      });
    }

    res.status(200).json(consultations);
  } catch (error) {
    console.error("Error fetching consultations:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const getConsultationsByDoctor = async (req, res) => {
  // Validate required query parameter
  if (!req.params.id) {
    return res.status(400).json({ message: "doctorId is required." });
  }

  try {
    // Find consultations that match the doctorId
    const consultations = await Consultation.find({
      doctor: req.params.id,
    }).populate("patient");

    if (consultations.length === 0) {
      return res.status(404).json({
        message: "No consultations found for the given doctor.",
      });
    }
    const data = consultations.filter(
      ({ doctor }) => doctor._id === req.params.id
    );
    res.status(200).json(consultations);
  } catch (error) {
    console.error("Error fetching consultations:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  createConsultation,
  getConsultation,
  getConsultationsByDoctor,
};
