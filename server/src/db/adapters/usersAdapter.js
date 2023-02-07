const client = require("../client");
const bcrypt = require("bcrypt");

async function getUserByUsername(username) {
  const {
    rows: [user],
  } = await client.query(
    `
    SELECT id, "firstName", "lastName", username FROM USERS
    WHERE username=$1;
    `,
    [username]
  );

  return user;
}

async function createUser(firstName, lastName, username, password) {
  const encryptedPass = await bcrypt.hash(password, 10);

  const {
    rows: [user],
  } = await client.query(
    `INSERT INTO users
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (username) DO NOTHING
        RETURNING id, firstName, lastName, username;
        `,
    [firstName, lastName, username, encryptedPass]
  );

  return user;
}

module.exports = { createUser, getUserByUsername };
