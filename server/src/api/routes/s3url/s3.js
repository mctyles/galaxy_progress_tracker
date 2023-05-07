const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const region = "us-west-1";
const bucketName = process.env.BUCKET_NAME;
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  region,
  credentials: { accessKeyId, secretAccessKey },
  signatureVersion: "v4",
});

async function generateUploadURL(filename) {
  const imageName = `${Date.now}-${filename}`;

  console.log(s3);

  const params = {
    Bucket: bucketName,
    Key: imageName,
  };

  const command = new PutObjectCommand(params);
  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 60 });
  return uploadUrl;
}

module.exports = { s3, generateUploadURL };
