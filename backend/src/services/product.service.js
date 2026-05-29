const pool = require("../config/db");

exports.findAll = async () => {
  const [rows] = await pool.query(`
    SELECT * FROM productss
  `);

  return rows;
};
