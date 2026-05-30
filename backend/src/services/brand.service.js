const pool = require("../config/db");
const BRAND = process.env.TABLE_BRAND;

exports.findAll = async () => {
  const sql = `SELECT * FROM ${BRAND}`;

  const [rows] = await pool.query(sql);

  return rows;
};

exports.create = async ({ brandName }) => {
  const sql = `INSERT INTO ${BRAND}
    (brand_name) VALUES (?)`;

  const [result] = await pool.query(sql, [brandName]);

  if (result.affectedRows === 0) {
    throw { statusCode: 500, message: "Failed to create brand." };
  }

  return result.insertId;
};

exports.update = async (brandName, brandId) => {
  const sql = `UPDATE ${BRAND}
      SET brand_name = ?
      WHERE brand_id = ?`;

  const [result] = await pool.query(sql, [brandName, brandId]);

  if (result.affectedRows === 0) {
    throw { statusCode: 500, message: "Failed to update brand." };
  }

  return { brandId, brandName };
};

exports.delete = async (brandId) => {
  const sql = `DELETE FROM ${BRAND}
        WHERE brand_id = ?`;
  const [result] = await pool.query(sql, [brandId]);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 404,
      message: "Failed to delete brand.",
      error: `Brand does not exits with this Id: ${brandId}`,
    };
  }

  return { brandId };
};
