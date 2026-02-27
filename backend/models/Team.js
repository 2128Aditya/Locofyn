const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    portfolio: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);