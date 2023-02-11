const http = require("http");
require("dotenv").config();
const app = require("./app");
const client = require("./db/client");

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);

  try {
    client.connect();
    console.log("Database is up and running.");
  } catch (error) {
    console.error("Could not connect to database.", error);
  }
});
