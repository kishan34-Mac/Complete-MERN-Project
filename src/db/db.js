const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000 // optional: increases waiting time
    })
    .then(() => {
      console.log("👍Mongoose is connected");
    })
    .catch((err) => {
      console.error("MongoDB is not connected:", err.message);
    });
}

module.exports = connectDB;
