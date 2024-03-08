export interface Book {
  id: number;
  categoryId: number;
  title: string;
  img: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  contents: string;
  pages: number;
  price: number;
  pubDate: string;
  likes: number;
}

export interface BookDetail extends Book {
  genre: string;
  isLiked: boolean | number;
}

export interface BookReviewItem {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}
