const pool = require("../config/db");

exports.findAll = async () => {
  const sql = `SELECT * FROM products`;

  const [rows] = await pool.query(sql);

  return rows;
};
