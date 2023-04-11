const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  // return mongoose.connect(process.env.MONGODB_URL);
  return mongoose.connect("mongodb://localhost/weekmart_ecommerce_database");
};
