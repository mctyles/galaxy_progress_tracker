const { getUploadUrlError } = require("../../errors");
const { generateUploadURL } = require("./s3");

async function getUploadURL(req, res, next) {
  try {
    const { filename } = req.body;

    const url = await generateUploadURL(filename);

    if (!url) {
      return next(getUploadUrlError());
    }

    res.json({ url });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getUploadURL };
