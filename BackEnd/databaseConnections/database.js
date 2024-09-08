// Get the client
const mysql = require("mysql2");
// from .env
require("dotenv").config();
let HOST = process.env.HOST;
let USER = process.env.USER;
let DATABASE = process.env.PASSWORD;
let PASSWORD = process.env.DATABASE;

// Create the connection to database
const pool = mysql.createConnection({
  host: HOST,
  user: USER,
  password: DATABASE,
  database: PASSWORD,
});

// create connection to database

// sending to database
const sql =
  "INSERT INTO `testdata`(`Q1`,`Q2`,`Q3`,`Q4`,`Q5`,`Q6`,`Q7`,`Q8`,`Q9`) VALUES (?,?,?,?,?,?,?,?,?)";
const values = [1, 1, 1, 1, 1, 1, 1, 1, 1];
pool.execute(
  {
    sql,
    values,
  },
  (err, result, fields) => {
    if (err instanceof Error) {
      console.log(err);
      return;
    }
    console.log(result);
    console.log(fields);
  }
);
