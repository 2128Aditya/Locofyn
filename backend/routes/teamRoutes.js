const express = require("express");
const router = express.Router();

const {
  getTeam,
  addTeam,
  deleteTeam
} = require("../controllers/teamController");

const upload = require("../middleware/upload");

router.get("/", getTeam);
router.post("/add", upload.single("image"), addTeam);
router.delete("/:id", deleteTeam);

module.exports = router;