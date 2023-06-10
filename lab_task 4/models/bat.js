const mongoose = require("mongoose");
let batSchema = mongoose.Schema({
  category: String,
  name: String,
  price: String,
  imgPath: String,
});
const Bat = mongoose.model("Bat", batSchema);
module.exports = Bat;
