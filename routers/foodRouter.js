const express = require("express");
const router = express.Router();

const {
  createFood,
  getFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

router.route("/").post(createFood).get(getFood);

router.route("/:id").patch(updateFood).delete(deleteFood);

module.exports = router;
