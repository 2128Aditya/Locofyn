require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// ✅ Middleware (PEHLE)
app.use(express.json());
app.use(cors());

// Static folder (image access)
app.use("/uploads", express.static("uploads"));

// ✅ Routes (BAAD ME)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/business", require("./routes/businessRoutes"));

// 🔥 NEW TEAM ROUTE (ADD KIYA HAI)
app.use("/api/team", require("./routes/teamRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🔥`);
});