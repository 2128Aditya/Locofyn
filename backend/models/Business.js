const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  whatsapp: String,
  github: String,
  live: String,
}, { timestamps: true });

module.exports = mongoose.model("Business", BusinessSchema);