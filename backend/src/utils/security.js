const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const securityMiddleware = [
  helmet(),

  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),

  cookieParser(),
];

module.exports = securityMiddleware;
