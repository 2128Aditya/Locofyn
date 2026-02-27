const Team = require("../models/Team");

// ➕ ADD TEAM MEMBER
exports.addMember = async (req, res) => {
  try {
    const member = new Team({
      name: req.body.name,
      role: req.body.role,
      github: req.body.github,
      linkedin: req.body.linkedin,
      portfolio: req.body.portfolio,
      image: req.file
        ? `http://localhost:5000/uploads/${req.file.filename}`
        : "",
    });

    await member.save();

    res.status(201).json({
      success: true,
      message: "Team member added successfully 🚀",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// 📥 GET ALL TEAM MEMBERS
exports.getMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// ❌ DELETE TEAM MEMBER
exports.deleteMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Team member deleted 🗑️",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};