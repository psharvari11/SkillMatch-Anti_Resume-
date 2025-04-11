const jwt = require("jsonwebtoken");

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }

    const token = authHeader.split(" ")[1];

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id };

    next(); 
  } catch (error) {
    console.error("Authentication Error:", error);

    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = authUser;