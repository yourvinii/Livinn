const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");




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

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hell I'am root");
});


// Index Route
app.get("/listings", async (req, res) => {
  const allLinstings = await Listing.find({});
  res.render("listings/index.ejs", { allLinstings });
});

// Show Route

app.get("/listings/:id",async (req, res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", {listing})
})


app.listen("8080", () => {
  console.log("App is listening on port 8080");
});
