const router = require("express").Router();
const brandController = require("../controllers/brand.controller");
const brandValidator = require("../validators/brand.validator");

// GET: get all brands
router.get("/", brandController.getAllBrands);

// POST: add new brand
router.post("/add", brandValidator.addBrandValidator, brandController.addBrand);

// PUT: update brand
router.put(
  "/update/:brandId",
  brandValidator.addBrandValidator,
  brandController.updateBrand,
);

// DELETE: delete an existing brand
router.delete("/delete/:brandId", brandController.deleteBrand);

module.exports = router;
