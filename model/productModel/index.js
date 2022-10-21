const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  categories: String,
  image: String,
  size: String,
  price: String,
  id: String,
  imagedeletepath: String,
});

module.exports = mongoose.model("products", ProductSchema);
