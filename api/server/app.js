const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const likeRoute = require("./routes/likeRoutes");

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

app.use(express.json());

app.use("/users", userRoute);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/like", likeRoute);

module.exports = app;
