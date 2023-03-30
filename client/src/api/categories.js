import { categoriesController } from "./api";

export async function fetchCategories() {
  try {
    const response = await categoriesController.get("");
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}
