import React from "react";
import { render } from "@testing-library/react";
import BooksItem from "./BooksItem";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
  id: 1,
  categoryId: 1,
  title: "dummy title",
  img: 5,
  form: "paper book",
  isbn: "dummy isbn",
  summary: "dummy summary",
  detail: "dummy detail",
  author: "dummy author",
  contents: "dummy contents",
  pages: 100,
  price: 10000,
  pubDate: "2024-03-01",
  likes: 1,
};

describe("Book item test", () => {
  it("render test", () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BooksItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(
      getByText(`${dummyBook.price.toLocaleString()}원`)
    ).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});
