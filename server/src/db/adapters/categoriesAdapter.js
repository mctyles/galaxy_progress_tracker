const client = require("../client");

const createCategory = async (categoryName) => {
  const {
    rows: [category],
  } = await client.query(
    `
    INSERT INTO categories (name)
    VALUES ($1)
    RETURNING *;
    `,
    [categoryName]
  );

  return category;
};

module.exports = { createCategory };
