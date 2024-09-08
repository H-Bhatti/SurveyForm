// Get the client
const mysql = require("mysql2");
// from .env
require("dotenv").config();
let HOST = process.env.HOST;
let USER = process.env.USER;
let DATABASE = process.env.DATABASE;
let PASSWORD = process.env.PASSWORD;

// Create the connection to database
const pool = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "mydb",
});

// create connection to database

function sendData(dataToSend) {
  const result = pool.query(
    `INSERT INTO testdata (Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9) VALUES (?,?,?,?,?,?,?,?,?)`,
    dataToSend
  );
  return result;
}

console.log(sendData([1, 1, 1, 1, 1, 1, 1, 5, 5]));
