const mongoose = require("mongoose");
const { Schema } = mongoose;

const prescriptionSchema = new Schema({
  consultation: {
    type: Schema.Types.ObjectId,
    ref: "consultations",
    required: true,
  },
  care_taken: {
    type: String,
    required: true,
  },
  medicines: {
    type: String,
    required: true,
  },
  pdf_link: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("prescriptions", prescriptionSchema);
