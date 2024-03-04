import { httpClient } from "@/api/http";

export const fetchCategory = async () => {
  try {
    const response = await httpClient.get("/category");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
