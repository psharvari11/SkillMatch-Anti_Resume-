const jwt = require("jsonwebtoken");

// Employer authentication middleware
const authEmployer = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not authorized as employer" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // You can customize this depending on what info you store in the token
    req.employer = { id: decoded.id };

    next();
  } catch (error) {
    console.error("Employer Auth Error:", error);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = authEmployer;
