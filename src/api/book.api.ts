import { NumberLiteralType } from "typescript";
import { httpClient } from "./http";
import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";

interface FetchBooksPrams {
  categoryId?: number;
  recent?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksPrams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });

    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};
