const { errorResponse } = require("../utils/apiResponse");

const routeNotFound = (req, res, next) => {
  // return res.status(404).json({
  //   message: "Route Not Found.",
  //   route: `${req.method}: ${req.url}`,
  // });

  return errorResponse(
    res,
    "Route Not Found.",
    `${req.method}: ${req.url}`,
    404,
  );
};

module.exports = routeNotFound;
