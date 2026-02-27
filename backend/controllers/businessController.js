const Business = require("../models/Business");

// ➕ Add
exports.addBusiness = async (req, res) => {
  try {
    const newBusiness = new Business({
      name: req.body.name,
      description: req.body.description,
      whatsapp: req.body.whatsapp,
      github: req.body.github,
      live: req.body.live,
      image: req.file
        ? `http://localhost:5000/uploads/${req.file.filename}`
        : "",
    });

    await newBusiness.save();

    res.json({ success: true, message: "Added 🔥" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// 📥 Get
exports.getBusinesses = async (req, res) => {
  const data = await Business.find().sort({ createdAt: -1 });
  res.json(data);
};

// ❌ Delete
exports.deleteBusiness = async (req, res) => {
  try {
    await Business.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};