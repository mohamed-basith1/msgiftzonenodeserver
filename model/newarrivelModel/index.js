const mongoose = require("mongoose");

const NewarrivelsSchema = mongoose.Schema({
  image: String,
  imagepath: String,
});

module.exports = mongoose.model("newarrivels", NewarrivelsSchema);
