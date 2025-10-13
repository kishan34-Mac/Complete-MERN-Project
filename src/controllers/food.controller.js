const foodModel= require('../models/food.model');
 
// controllers/food.controller.js
async function createFood(req, res) {
  // normal Express signature: (req, res)
  console.log(req.foodPartner);
  console.log(req.body)
  
  res.json({ success: true, message: "Food created" });
}
module.exports = { createFood };
