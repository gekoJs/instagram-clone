const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "True");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/users", userRoute);

app.use(express.json());

module.exports = app;
