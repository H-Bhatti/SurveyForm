const express = require("express");
const app = express();

app.use(express.json());
//for parsing json data to server side

// POST /greet endpoint
app.post("/greet", (req, res) => {});

// Start the server
app.listen(5000, () => {
  console.log("server started  on port 5000");
});
//start to listen on specified port
