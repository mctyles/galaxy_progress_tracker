const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const apiRouter = require("./api/api");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", apiRouter);

module.exports = app;
