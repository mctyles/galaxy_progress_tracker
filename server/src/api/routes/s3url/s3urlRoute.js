const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const { getUploadURL } = require("./s3urlController");

const s3urlRouter = express.Router();

s3urlRouter.get("/", useToken, requireUser, getUploadURL);

s3urlRouter.post("/", useToken, requireUser);

module.exports = { s3urlRouter };
