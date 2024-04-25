const categoryRouter = require("./categoryRouter");
const foodRouter = require("./foodRouter");
const accountRouter = require("./accountRouter");

module.exports = (app) => {
  app.use("/api/categories", categoryRouter);
  app.use("/api/foods", foodRouter);
  app.use("/api/accounts", accountRouter);
};
