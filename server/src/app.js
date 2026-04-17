require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const initializeAdmin = require("./utils/initializeAdmin");

// Import routes
const authRoutes = require("./routes/authRoutes");
const preiseRoutes = require("./routes/preiseRoutes");
const termineRoutes = require("./routes/termineRoutes");
const einstellungenRoutes = require("./routes/einstellungenRoutes");
const bonusRoutes = require("./routes/bonusRoutes");
const oeffnungszeitenRoutes = require("./routes/oeffnungszeitenRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
  : [
      "https://magenta-capybara-527698.hostingersite.com",
      "https://fahrschule-lg.scooldrive.com",
      "http://localhost:5173",
      "http://localhost:3000",
    ];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS: " + origin), false);
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

// // Set trust proxy for secure cookies and HTTPS redirects
app.set("trust proxy", 1); // <--- HIER!

// Connect to MongoDB
connectDB();

// Initialize admin user
initializeAdmin();

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 100 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 1000, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: "Zu viele Anfragen, versuchen Sie es später erneut.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// Stricter rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login attempts per windowMs
  message: {
    success: false,
    message: "Zu viele Login-Versuche, versuchen Sie es später erneut.",
  },
});

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server ist online",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API routes
// app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/preise", preiseRoutes);
app.use("/api/termine", termineRoutes);
app.use("/api/einstellungen", einstellungenRoutes);
app.use("/api/bonus", bonusRoutes);
app.use("/api/oeffnungszeiten", oeffnungszeitenRoutes);
app.use("/api/registrations", registrationRoutes);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route nicht gefunden",
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error("Global error handler:", error);

  // Mongoose validation error
  if (error.name === "ValidationError") {
    const errors = Object.values(error.errors).map((err) => err.message);
    return res.status(400).json({
      success: false,
      message: "Validierungsfehler",
      errors,
    });
  }

  // Mongoose duplicate key error
  if (error.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Doppelter Eintrag bereits vorhanden",
    });
  }

  // JWT errors
  if (error.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Ungültiges Token",
    });
  }

  if (error.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Token abgelaufen",
    });
  }

  // Default server error
  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Interner Server-Fehler"
        : error.message,
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  process.exit(0);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server läuft auf Port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
