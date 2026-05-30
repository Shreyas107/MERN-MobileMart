const { errorResponse } = require("../utils/apiResponse");

const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err);

  return errorResponse(
    res,
    err.message || "Internal Server Error",
    err.errors || null,
    err.statusCode || 500,
  );
};

module.exports = errorHandler;
