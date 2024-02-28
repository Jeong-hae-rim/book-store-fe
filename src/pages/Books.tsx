import { styled } from "styled-components";
import Title from "../components/common/Title";
import Layout from "../components/layout/Layout";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import { useBooks } from "../hooks/useBooks";

export default function Books() {
  const { books, pagination, isEmpty } = useBooks();

  console.log(books, pagination);
  return (
    <Layout>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <BooksFilter />
        <BooksViewSwitcher />
        {isEmpty && <BooksList books={books} />}
        {!isEmpty && <BooksEmpty />}
        {isEmpty && <Pagination />}
      </BooksStyle>
    </Layout>
  );
}

const BooksStyle = styled.div``;
