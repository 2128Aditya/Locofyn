const Team = require("../models/Team");

// GET ALL
exports.getTeam = async (req, res) => {
  try {
    const data = await Team.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD
exports.addTeam = async (req, res) => {
  try {
    const { name, role, github, linkedin, portfolio } = req.body;

    // ✅ FIXED BASE URL
    const baseURL = process.env.BASE_URL || "https://locafyn.onrender.com";

    const image = req.file
      ? `${baseURL}/uploads/${req.file.filename}`
      : "";

    const newMember = new Team({
      name,
      role,
      github,
      linkedin,
      portfolio,
      image,
    });

    await newMember.save();

    res.json({ success: true, data: newMember });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteTeam = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};