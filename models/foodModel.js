const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.SchemaType.ObjectId,
    ref: "category",
  },
});

module.exports = mongoose.model("food", foodSchema);
