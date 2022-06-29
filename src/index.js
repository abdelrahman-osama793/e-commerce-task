const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./util/database");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const itemRouter = require("./routes/item");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/items", itemRouter);

//IIFO
(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (e) {
    console.log(e);
  }
})();
