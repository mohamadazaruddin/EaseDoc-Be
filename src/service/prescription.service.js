const Prescription = require("../model/Prescriptions"); // Adjust path as necessary
const Consultation = require("../model/Consultations"); // Adjust path as necessary
const mongoose = require("mongoose");

const createPrescription = async (req, res) => {
  const { consultation_id, care_taken, medicines, pdf_link } = req.body;

  // Validate required fields
  if (!consultation_id || !care_taken || !medicines) {
    return res.status(400).json({
      message: "Consultation ID, care taken, and medicines are required.",
    });
  }

  try {
    // Check if the consultation exists
    const consultationExists = await Consultation.findById(consultation_id);
    if (!consultationExists) {
      return res.status(404).json({ message: "Consultation not found." });
    }

    // Create a new prescription
    const newPrescription = new Prescription({
      consultation: consultation_id,
      care_taken,
      medicines,
      pdf_link, // Optional, only included if provided
    });

    // Save the prescription to the database
    const savedPrescription = await newPrescription.save();

    // Return success response
    res.status(201).json(savedPrescription);
  } catch (error) {
    console.error("Error saving prescription:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  createPrescription,
};
