// const foodModel = require("../models/food.model");
// const storageService = require("../services/stroage.service");
// const { v4: uuid } = require("uuid");

// async function createFood(req, res) {
//   console.log(req.foodPartner);
//   console.log(req.body);
//   console.log(req.file);

//   const fileUploadResult=await storageService.uploadFile(req.file.buffer,uuid())
//   console.log((fileUploadResult));
//   req.send("food item created")

// }

// module.exports = { createFood };

const foodModel = require("../models/food.model");
const storageService = require("../services/stroage.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, error: "No file uploaded" });
    }

    const fileUploadResult = await storageService.uploadFile(
      req.file.buffer,
      uuid()
    );
    console.log(fileUploadResult);

    return res.status(201).json({
      success: true,
      message: "Food item created",
      videoUrl: fileUploadResult.url,
    });
  } catch (err) {
    console.error("CreateFood Error:", err);

    // Check for authentication error from ImageKit or storage service
    if (
      err.message &&
      err.message.toLowerCase().includes("cannot be authenticated")
    ) {
      return res.status(401).json({
        success: false,
        error:
          "Storage service authentication failed. Please check your API credentials.",
      });
    }

    return res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = { createFood };
