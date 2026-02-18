const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { PORT } = require("./config");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ROUTES
app.use("/test", (req, res) => {
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(
    `SERVER started at PORT: ${PORT}, URL: http://localhost:${PORT}/`,
  );
});
