import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { sendDataToDbs } from "./database.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let port = parseInt(process.env.PORT);
console.log(port);

app.post("/", (req, res) => {
  const msg = req.body["msg"];
  console.log(msg);
  let objArr = Object.values(msg);
  console.log(objArr);
  sendDataToDbs(objArr);
});

// Start the server
// start to listen on specified port
app.listen(port, () => {
  console.log("server started  on port 5000");
});

// getrequest to postman
app.get("/", (req, res) => {
  res.send("hello world of gays");
});
// send it to postman from database
