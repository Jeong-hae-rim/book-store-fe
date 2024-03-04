import { useEffect, useState } from "react";

import { BookDetail } from "@/models/book.model";
import { useAuthStore } from "@/store/authStore";

import { fetchBook, likeBook, unLikeBook } from "@/api/book.api";

import { useAlert } from "@/hooks/useAlert";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);

  const { showAlert } = useAlert();
  const { isloggedIn } = useAuthStore();

  console.log(isloggedIn);

  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then((res) => {
      setBook(res);
    });
  }, [bookId]);

  const likeToggle = () => {
    if (!isloggedIn) {
      showAlert("로그인이 필요합니다.");
      return;
    }

    if (!book) return;

    if (book.isLiked) {
      // like 상태 -> unlike 실행
      unLikeBook(book.id).then(() => {
        setBook({
          ...book,
          isLiked: false,
          likes: book.likes - 1,
        });
      });
    } else {
      // unlike 상태 -> like 실행
      likeBook(book.id).then(() => {
        // 성공 처리
        setBook({
          ...book,
          isLiked: true,
          likes: book.likes + 1,
        });
      });
    }
  };

  return { book, likeToggle };
};
