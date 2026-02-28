const Team = require("../models/Team");

// ➕ ADD MEMBER
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
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// 📥 GET ALL MEMBERS
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

// ❌ DELETE MEMBER
exports.deleteMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

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

// ✏️ UPDATE MEMBER (EDIT)
exports.updateMember = async (req, res) => {
  try {
    const { name, role, github, linkedin, portfolio } = req.body;

    const updateData = {
      name,
      role,
      github,
      linkedin,
      portfolio,
    };

    // Image update
    if (req.file) {
      updateData.image = `https://locafyn.onrender.com/uploads/${req.file.filename}`;
    }

    const updatedMember = await Team.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedMember) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    res.json({
      success: true,
      message: "Member updated successfully ✏️",
      data: updatedMember,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};