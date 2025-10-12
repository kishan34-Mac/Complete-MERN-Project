const userModel = require("../models/user.model");
const bcryt = require("bcryptjs");
const jwt =require('jsonwebtoken')

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;
  const isUserAlreadyExits = await userModel.findOne({
    email,
  });
  if (isUserAlreadyExits) {
    return res.status(400).json({
      message: "The user is already Exist",
    });
  }
  const hashedPassword = await bcryt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  })
  const token =jwt.sign({
    id:user._id,
  })
}
