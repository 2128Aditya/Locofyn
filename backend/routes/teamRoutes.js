const express = require("express");
const router = express.Router();

const {
  addMember,
  getMembers,
  deleteMember,
} = require("../controllers/teamController");

const upload = require("../middleware/upload");

router.post("/add", upload.single("image"), addMember);
router.get("/", getMembers);
router.delete("/:id", deleteMember);

module.exports = router;