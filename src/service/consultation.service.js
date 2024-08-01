const Consultation = require("../model/Consultations");
const createConsultation = async (req, res) => {
  const { patient, doctor, current_illness, family_history, recent_surgery } =
    req.body;

  // Validate required fields
  if (!patient || !doctor || !current_illness || !family_history) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newConsultation = new Consultation({
      patient,
      doctor,
      current_illness,
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

module.exports = {
  createConsultation,
};
