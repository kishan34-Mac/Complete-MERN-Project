const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/foodview", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000 // optional: increases waiting time
    })
    .then(() => {
      console.log("Mongoose is connected");
    })
    .catch((err) => {
      console.error("MongoDB is not connected:", err.message);
    });
}

module.exports = connectDB;
