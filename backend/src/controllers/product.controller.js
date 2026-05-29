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
