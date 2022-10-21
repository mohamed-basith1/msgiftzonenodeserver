const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
  categories: String,
});

module.exports = mongoose.model("categories",CategoriesSchema);
