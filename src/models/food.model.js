const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  descripton: {
    type: String,
  },
  foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodpartner",
  },
});
const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;
