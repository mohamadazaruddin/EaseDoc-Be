const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: false,
  },
  years_of_experience: {
    type: Number,
    required: false,
  },

  role: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  history_of_surgery: {
    type: String,
    required: false,
  },
  history_of_illness: {
    type: String,
    required: false,
  },

  accountCreatedAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("users", userSchema);
