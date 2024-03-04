import { httpClient, requestHandler } from "@/api/http";
import { Book, BookDetail } from "@/models/book.model";
import { Pagination } from "@/models/pagination.model";

interface FetchBooksPrams {
  categoryId?: number;
  recent?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
  params: FetchBooksPrams;
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

export const fetchBook = async (bookId: string) => {
  return await requestHandler<BookDetail>("get", `/books/${bookId}`);
};

export const likeBook = async (bookId: number) => {
  return await requestHandler("post", `likes/${bookId}`);
};

export const unLikeBook = async (bookId: number) => {
  return await requestHandler("delete", `likes/${bookId}`);
};
