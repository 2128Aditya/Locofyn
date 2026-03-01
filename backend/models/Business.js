const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    whatsapp: { type: String },
    github: { type: String },
    live: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);