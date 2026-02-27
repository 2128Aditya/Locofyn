const express = require("express");
const router = express.Router();

const {
  addBusiness,
  getBusinesses,
  deleteBusiness,
} = require("../controllers/businessController");

const upload = require("../middleware/upload");

router.post("/add", upload.single("image"), addBusiness);
router.get("/", getBusinesses);
router.delete("/:id", deleteBusiness);

module.exports = router;