const brandService = require("../services/brand.service");
const { successResponse } = require("../utils/apiResponse");

exports.getAllBrands = async (req, res, next) => {
  try {
    const brands = await brandService.findAll();

    if (brands.length === 0)
      return successResponse(res, "No brands found.", []);

    return successResponse(res, "Brands fetched successfully.", brands);
  } catch (error) {
    next(error);
  }
};

exports.addBrand = async (req, res, next) => {
  try {
    const brand = await brandService.create(req.body);
    return successResponse(res, "Brand created successfully.", brand, 201);
  } catch (error) {
    next(error);
  }
};

exports.updateBrand = async (req, res, next) => {
  try {
    const brand = await brandService.update(
      req.body.brandName,
      req.params.brandId,
    );

    return successResponse(res, "BrandName updated successfully.", brand);
  } catch (error) {
    next(error);
  }
};

exports.deleteBrand = async (req, res, next) => {
  try {
    const brand = await brandService.delete(req.params.brandId);
    return successResponse(res, "Brand deleted successfully.", brand);
  } catch (error) {
    next(error);
  }
};
