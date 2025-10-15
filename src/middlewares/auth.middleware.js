const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req, res, next) {
  try {
    if (!req.cookies) {
      return res.status(500).json({
        message: "cookie-parser not enabled! Please check your app.js.",
      });
    }

    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Please login first: token missing",
      });
    }

    if (
      typeof token !== "string" ||
      !token.match(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/)
    ) {
      return res.status(401).json({
        message: "Token is malformed",
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded JWT payload id:", decoded.id);
      // This is where you'd search in Mongo CLI: db.foodpartners.find({ _id: ObjectId(decoded.id) })
      console.log(
        'MongoDB shell command for checking ID:',
        `db.foodpartners.find({ _id: ObjectId("${decoded.id}") })`
      );
    } catch (err) {
      return res.status(401).json({
        message: "Invalid or expired token",
        error: err.message,
      });
    }

    const foodPartner = await foodPartnerModel.findById(decoded.id);
    console.log("Food partner found:", !!foodPartner, "ID searched:", decoded.id);

    if (!foodPartner) {
      return res.status(401).json({
        message: "Food partner not found or token invalid",
        id: decoded.id,           // show this in error for manual DB search
        dbShell: `db.foodpartners.find({ _id: ObjectId("${decoded.id}") })`
      });
    }

    req.foodPartner = foodPartner;
    next();
  } catch (err) {
    console.error("Critical error in auth middleware:", err);
    return res.status(500).json({
      message: "Server error in authentication",
      error: err.message,
    });
  }
}

module.exports = {
  authFoodPartnerMiddleware,
};
