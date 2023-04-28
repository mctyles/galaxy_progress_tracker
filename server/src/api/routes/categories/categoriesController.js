const { getAllCategories } = require("../../../db/adapters/categoriesAdapter");
const { fetchCategoriesError } = require("../../errors");

async function getCategories(req, res, next) {
  try {
    const categories = await getAllCategories();

    if (!categories) {
      const student = await getStuden
      return next(fetchCategoriesError());
    }

    res.json(categories);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getCategories };
