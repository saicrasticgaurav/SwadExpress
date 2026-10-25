import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token =
      req.cookies?.token ||
      (authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token is required",
      });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, config.JWT_SECRET);

    // Store authenticated user's ID
    req.user = {
      userId: decoded.userId,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
