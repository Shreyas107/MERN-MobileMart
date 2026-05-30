const pool = require("../config/db");
const PRODUCT = process.env.TABLE_PRODUCT;

exports.findAll = async () => {
  const sql = `SELECT * FROM ${PRODUCT}`;

  const [rows] = await pool.query(sql);

  return rows;
};

exports.create = async (productData) => {
  const { brandId, modelName, price, stock, ram, storage, color, description } =
    productData;

  const sql = `INSERT INTO ${PRODUCT}
    (brand_id, model_name, price, stock, ram, storage, color, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const [result] = await pool.query(sql, [
    brandId,
    modelName,
    price,
    stock,
    ram,
    storage,
    color,
    description,
  ]);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "Failed to create product",
    };
  }

  return result.insertId;
};

exports.update = async (productData, productId) => {
  const { brandId, modelName, price, stock, ram, storage, color, description } =
    productData;

  const sql = `UPDATE ${PRODUCT}
        SET brand_id = ?, model_name = ?, price = ?, stock = ?, 
        ram = ?, storage = ?, color = ?, description = ?
        WHERE product_id = ?`;

  const [result] = await pool.query(sql, [
    brandId,
    modelName,
    price,
    stock,
    ram,
    storage,
    color,
    description,
    productId,
  ]);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "Failed to update product",
    };
  }

  return { brandId, modelName, price, stock, ram, storage, color, description };
};

exports.delete = async (productId) => {
  const sql = `DELETE FROM ${PRODUCT}
        WHERE product_id = ?`;

  const [result] = await pool.query(sql, [productId]);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 404,
      message: "Failed to delete product.",
      error: `Product does not exits with this Id: ${productId}`,
    };
  }
  return { productId };
};
