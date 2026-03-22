const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticate = require("../middlewares/auth");
const { validateLogin } = require("../middlewares/validation");

// @route   POST /api/auth/login
// @desc    Admin login
// @access  Public
router.post("/login", validateLogin, authController.login);

// @route   GET /api/auth/verify
// @desc    Verify token validity
// @access  Private
router.get("/verify", authenticate, authController.verifyToken);

// @route   POST /api/auth/logout
// @desc    Admin logout
// @access  Private
router.post("/logout", authenticate, authController.logout);

module.exports = router;
