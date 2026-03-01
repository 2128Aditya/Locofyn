const Business = require("../models/Business");

// ➕ ADD BUSINESS
exports.addBusiness = async (req, res) => {
  try {
    const base = process.env.BASE_URL || "https://locafyn.onrender.com";

    const newBusiness = new Business({
      name: req.body.name,
      description: req.body.description,
      whatsapp: req.body.whatsapp,
      github: req.body.github,
      live: req.body.live,
      image: req.file
        ? `${base}/uploads/${req.file.filename}`
        : "",
    });

    await newBusiness.save();

    res.json({ success: true, message: "Business Added 🔥" });
  } catch (err) {
    console.log("Business Error:", err);
    res.status(500).json({ error: err.message });
  }
};

// 📥 GET ALL BUSINESS
exports.getBusinesses = async (req, res) => {
  try {
    const data = await Business.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ DELETE BUSINESS
exports.deleteBusiness = async (req, res) => {
  try {
    await Business.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};