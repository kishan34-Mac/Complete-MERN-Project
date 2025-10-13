const foodModel= require('../models/food.model');
const strogeService=require("../services/stroage.service")
 
// controllers/food.controller.js
async function createFood(req, res) {
  // normal Express signature: (req, res)
  console.log(req.foodPartner);
  console.log(req.body)
  console.log(req.file)
  const fileUploadResult=await strogeService.uploadFile(req.file.buffer, req.file.originalname,"");

  
  res.json({ success: true, message: "Food created" });
}
module.exports = { createFood };
