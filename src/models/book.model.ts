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
  categoryName: string;
  liked: boolean;
}
