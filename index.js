const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const categoriesRouter = require("./router/categoriesRouter");
const newArrivelsRouter = require("./router/newarrivelsRouter");
require("dotenv").config();
const app = express();

//body parser
app.use(cors());
app.use(express.json());

//router
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/categories", categoriesRouter);
app.use("/newarrivels", newArrivelsRouter);

//db connection
mongoose.connect(process.env.MONGOCONNECTION, () => {
  console.log("mongodb is connected");
});

//server connect
app.listen(process.env.PORT, () => {
  console.log("server is running wait for database connection 8008");
});
