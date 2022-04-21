const mongoose = require("mongoose");

const customer = new mongoose.Schema({
  name: String,
  email: String,
  currBal: Number,
});

const Customer = new mongoose.model("customers", customer);

const transfer = new mongoose.Schema({
  name: String,
  email: String,
});

const Transfer = new mongoose.model("transfer", transfer);

module.exports = { Customer, Transfer };
