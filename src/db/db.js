const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongoose://localhost:27017/foodview")
    .then(() => {
      console.log("Mongoose is connected");
    })
    .catch((err) => {
      console.log("MOngooDb is not connected");
    });
}
module.exports = connectDB;
