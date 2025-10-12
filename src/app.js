// backend/src/app.js

const express = require("express");
const cookieParser = require("cookie-parser");
const authRouters = require("./routes/auth.routes"); // ✅ Correct path

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Default route
app.get("/", (req, res) => {
  res.send("✅ Server is running successfully!");
});

// Routes
app.use("/api/auth", authRouters); // ✅ All auth routes will start with /api/auth

module.exports = app;
