const cartModel = require("../models/cartModel");

module.exports = {
  addToCart: async (req, res) => {
    const { account_id, food_id, quantity } = req.body;
  },
};
