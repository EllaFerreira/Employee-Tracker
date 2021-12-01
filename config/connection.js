const mysql = require("mysql2");
require("dotenv").config();

const connectingDb = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connect to the employee_db database. 🚀`)
);
module.exports = connectingDb;
