const mongoose = require("mongoose");

const oderSchema = mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  totalMoney: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["online", "On Delivery"],
    default: "On Delivery",
  },
  isPayment: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["confirm", "ship", "receive", "pending"],
    default: "pending",
  },
  cartId: {
    type: mongoose.SchemaType.ObjectId,
    ref: "cart",
  },
});

module.exports = mongoose.model("oder", oderSchema);
