const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getUserData = async (req, res) => {
  try {
    const { role } = req.query;
    let oppositeRole;
    if (role === "doctor") {
      oppositeRole = "patient";
    } else if (role === "patient") {
      oppositeRole = "doctor";
    } else {
      return res.status(400).json({ message: "Invalid role provided" });
    }
    const users = await User.find({ role: oppositeRole }).select("-password");
    if (users.length === 0) {
      return res
        .status(404)
        .json({ message: `No users found with role ${oppositeRole}` });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// register user
const createUser = (async = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      specialty,
      years_of_experience,
      role,
      phone_number,
      history_of_surgery,
      history_of_illness,
    } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      specialty,
      years_of_experience,
      role,
      phone_number,
      history_of_surgery,
      history_of_illness,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
    console.error("Error registering user", err);
  }
});

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    const loggedInuser = {
      id: user._id,
      name: user.name,
      email: user.email,
      specialty: user.specialty,
      years_of_experience: user.years_of_experience,
      role: user.role,
      phone_number: user.phone_number,
    };

    res.status(200).json({ loggedInuser, token });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getUserData,
  createUser,
  login,
};
