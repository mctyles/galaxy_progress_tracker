const client = require("../client");
const bcrypt = require("bcrypt");

const getUserByUsername = async (username) => {
  const {
    rows: [user],
  } = await client.query(
    `
    SELECT * FROM users
    WHERE username=$1;
    `,
    [username]
  );

  return user;
};

const getUserById = async (userId) => {
  const {
    rows: [user],
  } = await client.query(
    `
    SELECT * FROM users
    WHERE id=$1;
    `,
    [userId]
  );

  return user;
};

const createUser = async ({ firstName, lastName, username, password }) => {
  const encryptedPass = await bcrypt.hash(password, 10);

  const {
    rows: [user],
  } = await client.query(
    `INSERT INTO users ("firstName", "lastName", username, password)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (username) DO NOTHING
        RETURNING id, "firstName", "lastName", username;
        `,
    [firstName, lastName, username, encryptedPass]
  );

  return user;
};

module.exports = { getUserByUsername, getUserById, createUser };
