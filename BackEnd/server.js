const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let port = parseInt(process.env.PORT);

app.post("/", (req, res) => {
  const { msg } = req.body;
  const data = {
    msg: msg,
  };

  console.log(data);
});

// Start the server
app.listen(port, () => {
  console.log("server started  on port 5000");
});
//start to listen on specified port
