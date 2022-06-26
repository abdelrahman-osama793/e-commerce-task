const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require('./util/database')
const userRouter = require("./routes/user");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);

(async () => {
    try {
        await sequelize.sync({ force: false })
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    } catch (e) {
        console.log(e)
    }
})()
