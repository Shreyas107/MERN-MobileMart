const pool = require("../config/db");

exports.findAll = async () => {
  const sql = `SELECT * FROM products`;

  const [rows] = await pool.query(sql);

  return rows;
};

exports.create = async (productData) => {
  const { brandId, modelName, price, stock, ram, storage, color, description } =
    productData;

  const sql = `INSERT INTO products
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
