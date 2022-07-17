const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ritikpatil:ritikpatil@cluster.ao7ly.mongodb.net/ToDo-App-2"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error on connecting to database"));

db.once("open", () => {
  console.log("Succesfully connected to database");
});
