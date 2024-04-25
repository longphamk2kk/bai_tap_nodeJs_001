const foodModel = require("../models/foodModel");

module.exports = {
  createFood: async (req, res) => {
    const body = req.body;
    const newFood = await foodModel.create(body);
    return res.status(201).json(newFood);
  },
  getFood: async (req, res) => {
    const category_id = req.query.category_id;
    const body_query = {};
    if (category_id) {
      body_query.category_id = category_id;
    }
    const foods = await foodModel.find(body_query).populate("category_id");
  },
  updateFood: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateFood = await foodModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updateFood);
  },
  deleteFood: async (req, res) => {
    const id = req.params.id;
    const deleteFood = await foodModel.findByIdAndDeltete(id);
    return res.status(200).json(deleteFood);
  },
};
