const Team = require("../models/Team");

// GET ALL
exports.getTeam = async (req, res) => {
  try {
    const data = await Team.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD
exports.addTeam = async (req, res) => {
  try {
    const { name, role, github, linkedin, portfolio } = req.body;
    const base = process.env.BASE_URL || 
    "https://localhost:5000";
    const image = req.file
      ? `${process.env.BASE_URL}/uploads/${req.file.filename}`
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