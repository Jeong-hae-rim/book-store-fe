import { requestHandler } from "@/api/http";

import { Category } from "@/models/category.model";

export const fetchCategory = async () => {
  return await requestHandler<Category>("get", "/category");
};
