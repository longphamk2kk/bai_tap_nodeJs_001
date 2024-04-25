const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  isOrder: {
    type: Boolean,
    default: false,
  },
  accountId: {
    type: mongoose.SchemaType.ObjectId,
    ref: "account",
  },
  items: [
    {
      food: {
        type: mongoose.SchemaType.ObjectId,
        ref: "food",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = mongoose.model("cart", cartSchema);
