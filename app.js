const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const customersRouter = require("./routes/customers");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  "mongodb+srv://ionicapp:Rmutl1234@cluster0.af4hu.mongodb.net/ionicapi",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use("/", indexRouter);

// localhost:3000/users
app.use("/users", usersRouter);

// localhost:3000/products
app.use("/products", productsRouter);
app.use("/customers", customersRouter);

module.exports = app;
