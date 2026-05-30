const router = require("express").Router();
const productController = require("../controllers/product.controller");
const validate = require("../middlewares/validate.middleware");
const productValidator = require("../validators/product.validator");

// GET: get all products
router.get("/", productController.getAllProducts);

// POST: add new product
router.post(
  "/add",
  productValidator.createProductValidator,
  validate,
  productController.addProduct,
);

// PUT: update product
router.put(
  "/update/:productId",
  productValidator.createProductValidator,
  validate,
  productController.updateProduct,
);

// DELETE: delete an existing product
router.delete("/delete/:productId", productController.deleteProduct);
module.exports = router;
