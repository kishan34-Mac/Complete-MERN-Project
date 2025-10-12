const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Dummy placeholder for loginUser - implement separately
async function loginUser(req, res) {
  // login logic here...
}

async function registerUser(req, res) {
  try {
    const { fullName, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "The user already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { id: user._id },
      "ef0cac68dcdfa2767144eb951ce103ae" // Ideally, use process.env.JWT_SECRET
    );
    // Add httpOnly option for security in production
    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = { loginUser, registerUser };
