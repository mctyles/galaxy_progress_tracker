import { useEffect, useState } from "react";
import { fetchCategories } from "../api/categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesList = await fetchCategories();
      if (categoriesList && categoriesList.length) {
        setCategories(categoriesList);
      }
      return;
    };

    getCategories();
  }, []);

  return categories;
}
