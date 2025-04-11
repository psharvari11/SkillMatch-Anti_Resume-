const validate = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const employerModel = require("../models/employerModels");




// Register Employer
const registerEmployer = async (req, res) => {
  try {
    const { email, password, companyName, industry } = req.body;

    if (!email || !password || !companyName || !industry) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    if (!validate.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Enter a valid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: "Enter a strong password (min. 6 chars)" });
    }

    const existingEmployer = await employerModel.findOne({ email });
    if (existingEmployer) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newEmployer = new employerModel({ companyName,  industry,email, password: hashPassword });
    const employer = await newEmployer.save();

    const eToken = jwt.sign({ id: employer._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ success: true, eToken });
  } catch (error) {
    console.error("Employer Register Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login Employer
const loginEmployer = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Missing email or password" });
    }

    const employer = await employerModel.findOne({ email });
    if (!employer) {
      return res.status(400).json({ success: false, message: "Employer does not exist" });
    }

    const isMatch = await bcrypt.compare(password, employer.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const eToken = jwt.sign({ id: employer._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ success: true, eToken });
  } catch (error) {
    console.error("Employer Login Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { loginEmployer, registerEmployer };
