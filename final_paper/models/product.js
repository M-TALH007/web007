const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  tittle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

exports.Product = mongoose.model("Product", productSchema);
