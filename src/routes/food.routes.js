const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

// Use memory storage (for req.file.buffer)
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"), // 'video' must match your Postman file key
  foodController.createFood
);

module.exports = router;
