const successResponse = (
  res,
  message = "success",
  statusCode = 200,
  data = null,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (
  res,
  message = "Internal Server Error",
  error = null,
  statusCode = 500,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
