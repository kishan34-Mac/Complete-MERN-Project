const express = require("express");
const cookieParser = require("cookie-parser");
const authRouters = require("./routes/auth.routes");
const foodRoutes=require("./routes/food.routes")
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(express.json());
 

app.get("/", (req, res) => {
  res.send("✅ Server is running successfully!");
});

app.use("/api/auth", authRouters);
app.use("/api/food",foodRoutes)

module.exports = app;
