const express = require("express");
const port = 5000;
const db = require("./config/mongoose");

const app = express();
app.use(express.json());


app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error in starting the server", err);
  }
  console.log(`Server is running at port ${port}`);
});
