const express = require("express");
const { getCategories } = require("./categoriesController");

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);

module.exports = { categoriesRouter };
