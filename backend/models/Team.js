const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  github: String,
  linkedin: String,
  portfolio: String,
}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);