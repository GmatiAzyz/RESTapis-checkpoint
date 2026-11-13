const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.get("/api/health", (req, res) => {
  res.json('{status: "ok"}');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
