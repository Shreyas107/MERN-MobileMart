const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const securityMiddleware = require("./src/utils/security");
const limiter = require("./src/utils/limiter");
const routeNotFound = require("./src/middlewares/routeNotFound");
const { successResponse } = require("./src/utils/apiResponse");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

// Security
app.use(securityMiddleware);

// Rate Limiting
app.use(limiter);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logging
app.use(morgan("dev"));

// Static Folder
app.use("/uploads", express.static("uploads"));

// Routes
const productRoutes = require("./src/routes/product.route");

// Health Route
app.get("/", (req, res) => {
  return successResponse(res, "health route");
});

app.use("/products", productRoutes);

// 404 Handler
app.use(routeNotFound);

// 🚨 GLOBAL ERROR HANDLER
app.use(errorHandler);

module.exports = app;
