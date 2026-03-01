const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String },
    image: { type: String },
    github: { type: String },
    linkedin: { type: String },
    portfolio: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);