import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;

      setCategory([{ categoryId: null, genre: "전체" }, ...category]);
    });
  }, []);

  return { category };
};
