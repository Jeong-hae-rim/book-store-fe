import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Book } from "@/models/book.model";
import { Pagination } from "@/models/pagination.model";

import { fetchBooks } from "@/api/book.api";

import { LIMIT } from "@/constants/pagination";
import { QUERYSTRING } from "@/constants/querystring";

export const useBooks = () => {
  const location = useLocation();

  const [books, setBooks] = useState<Book[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    totalCount: 0,
    currentPage: 1,
  });

  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    fetchBooks({
      categoryId: params.get(QUERYSTRING.CATEGORY_ID)
        ? Number(params.get(QUERYSTRING.CATEGORY_ID))
        : undefined,
      recent: params.get(QUERYSTRING.RECENT) ? true : undefined,
      currentPage: params.get(QUERYSTRING.PAGE)
        ? Number(params.get(QUERYSTRING.PAGE))
        : 1,
      limit: LIMIT,
    }).then(({ books, pagination }) => {
      setBooks(books);
      setPagination(pagination);
      setIsEmpty(books.length === 0 ? false : true);
    });
  }, [location.search]);

  return { books, pagination, isEmpty };
};
