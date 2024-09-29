// Get the client
// from.env;
// require("dotenv").config();
import "dotenv/config.js";

let HOST = process.env.HOST;
let USER = process.env.USER;
let DATABASE = process.env.DATABASE;
let PASSWORD = process.env.PASSWORD;

import mysql from "mysql2";

// Create the connection to database with env
const pool = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

// create connection to database

export function sendDataToDbs(dataToSend) {
  const result = pool.query(
    `INSERT INTO testdata (Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9) VALUES (?,?,?,?,?,?,?,?,?)`,
    dataToSend
  );
  return result;
}
// database querry to insert
