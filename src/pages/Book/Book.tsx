import { styled } from "styled-components";
import Title from "../../components/common/Title";
import BooksFilter from "../../components/Books/BooksFilter";
import BooksViewSwitcher from "../../components/Books/BooksViewSwitcher";
import BooksList from "../../components/Books/BooksList";
import BooksEmpty from "../../components/Books/BooksEmpty";
import Pagination from "../../components/Books/Pagination";
import { useBooks } from "../../hooks/useBooks";

export default function Book() {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {isEmpty && <BooksList books={books} />}
        {!isEmpty && <BooksEmpty />}
        <Pagination pagination={pagination} />
      </BooksStyle>
    </>
  );
}

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
`;
