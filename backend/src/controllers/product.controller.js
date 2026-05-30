const productService = require("../services/product.service");
const { successResponse } = require("../utils/apiResponse");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.findAll();

    if (products.length === 0)
      return successResponse(res, "No products found", []);

    return successResponse(res, "Products fetched successfully", products);
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const product = await productService.create(req.body);
    return successResponse(res, "Product created successfully.", product, 201);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await productService.update(req.body, req.params.productId);
    return successResponse(res, "Poduct updated successfully.", product);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.delete(req.params.productId);
    return successResponse(res, "Product deleted successfully.", product);
  } catch (error) {
    next(error);
  }
};

// Error handling:
// Route
//  ↓
// createProductValidator
//  ↓
// validate.middleware
//  ↓
// errorHandler (if validation fails)
//  ↓
// Controller
