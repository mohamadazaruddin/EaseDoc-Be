const mongoose = require("mongoose");
const { Schema } = mongoose;

const consultationSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: "users", required: true },
  doctor: { type: Schema.Types.ObjectId, ref: "users", required: true },
  current_illness: {
    type: String,
    required: false,
  },
  family_history: {
    type: String,
    required: false,
  },
  others: {
    type: String,
    required: false,
  },
  allergies: {
    type: String,
    required: false,
  },
  recent_surgery: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("consultations", consultationSchema);
