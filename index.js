const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const templatepath = path.join(__dirname, "./templates/views");
const connString =
  "mongodb+srv://sahilp:sahilp11@cluster0.vokug.mongodb.net/bankingTSF?retryWrites=true&w=majority";
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", templatepath);

console.log(__dirname);
console.log(templatepath);

const conn = mongoose.connect(
  connString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Database Connected");
    }
  }
);

const { Customer, Transfer } = require("./model");

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/customer", (req, res) => {
  Customer.find({}, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      console.log(docs);

      res.render("customer", { userData: docs });
    }
  });
});

app.get("/transfer", (req, res) => {
  res.render("transfer");
});

app.post("transfer", (req,res)=>{
        res.render("transfer");
})

app.listen(port, () => {
  console.log("server running on port number", port);
});
