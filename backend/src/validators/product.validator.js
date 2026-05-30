const { body } = require("express-validator");

exports.createProductValidator = [
  body("brandId")
    .notEmpty()
    .withMessage("Brand ID is required")
    .isInt({ min: 1 })
    .withMessage("Brand ID must be a positive integer"),

  body("modelName")
    .trim()
    .notEmpty()
    .withMessage("Model name is required")
    .isLength({ max: 150 })
    .withMessage("Model name cannot exceed 150 characters"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a valid positive number"),

  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),

  body("ram")
    .optional()
    .isLength({ max: 20 })
    .withMessage("RAM cannot exceed 20 characters"),

  body("storage")
    .optional()
    .isLength({ max: 20 })
    .withMessage("Storage cannot exceed 20 characters"),

  body("color")
    .optional()
    .isLength({ max: 50 })
    .withMessage("Color cannot exceed 50 characters"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];
