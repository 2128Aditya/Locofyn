const express = require("express");
const router = express.Router();

const {
  addMember,
  getMembers,
  deleteMember,
  updateMember,
} = require("../controllers/teamController");

const upload = require("../middleware/upload");

// ➕ Add
router.post("/add", upload.single("image"), addMember);

// 📥 Get
router.get("/", getMembers);

// ❌ Delete
router.delete("/:id", deleteMember);

// ✏️ Update (Edit)
router.put("/:id", upload.single("image"), updateMember);

module.exports = router;