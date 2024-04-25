const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://longphamk2kk:123@cluster0.on1riwo.mongodb.net/food_order?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connect DB success");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;
