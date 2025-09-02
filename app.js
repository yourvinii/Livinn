const express = require("express");
const app = express();
const mongoose = require("mongoose");


const MONGO_URL = "mongodb://127.0.0.1:27017/livinn";

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/", (req, res) => {
  res.send("Hell I'am root");
});

app.listen("8080", () => {
  console.log("App is listening on port 8080");
});
