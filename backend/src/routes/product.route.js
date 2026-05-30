const router = require("express").Router();
const productController = require("../controllers/product.controller");
const validate = require("../middlewares/validate.middleware");
const productValidator = require("../validators/product.validator");

router.get("/", productController.getAllProducts);
router.post(
  "/add",
  productValidator.createProductValidator,
  validate,
  productController.addProduct,
);

module.exports = router;
