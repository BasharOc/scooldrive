const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Generate JWT Token
const generateToken = (adminId) => {
  return jwt.sign({ id: adminId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Admin Login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Ungültige Anmeldedaten",
      });
    }

    // Check if account is locked
    if (admin.isLocked) {
      return res.status(423).json({
        success: false,
        message:
          "Account ist temporär gesperrt. Versuchen Sie es später erneut.",
      });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account ist deaktiviert",
      });
    }

    // Compare password
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Ungültige Anmeldedaten",
      });
    }

    // Generate token
    const token = generateToken(admin._id);

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    res.json({
      success: true,
      message: "Erfolgreich angemeldet",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server-Fehler beim Anmelden",
    });
  }
};

// Verify Token (for protected routes)
const verifyToken = async (req, res) => {
  try {
    const admin = req.admin; // Comes from auth middleware

    res.json({
      success: true,
      message: "Token gültig",
      admin: {
        id: admin._id,
        username: admin.username,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(500).json({
      success: false,
      message: "Server-Fehler bei der Token-Verifizierung",
    });
  }
};

// Logout (client-side token removal)
const logout = async (req, res) => {
  try {
    // In a stateless JWT system, logout is handled client-side
    // But we can log the logout event for security monitoring
    console.log(`Admin ${req.admin.username} logged out at ${new Date()}`);

    res.json({
      success: true,
      message: "Erfolgreich abgemeldet",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Server-Fehler beim Abmelden",
    });
  }
};

module.exports = {
  login,
  verifyToken,
  logout,
};
