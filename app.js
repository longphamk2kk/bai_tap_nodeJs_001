const express = require("express");
const app = express();
const connectDB = require("./configs/database");
const router = require("./routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
router(app);

app.listen(6000, () => {
  console.log("sever run at port 6000");
});
