const client = require("../client");

async function createCategory(categoryName) {
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
}

async function getAllCategories() {
  const { rows: categories } = await client.query(`SELECT * FROM categories;`);
  return categories;
}

module.exports = { createCategory, getAllCategories };
