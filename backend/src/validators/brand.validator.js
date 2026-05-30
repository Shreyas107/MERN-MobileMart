const { body } = require("express-validator");

exports.addBrandValidator = [
  body("brandName").notEmpty().withMessage("Brand Name is required"),
];
