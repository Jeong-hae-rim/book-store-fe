import { styled } from "styled-components";
import BooksItem from "./BooksItem";
import { Book } from "../../models/book.model";

interface Props {
  books: Book[];
}

export default function BooksList({ books }: Props) {
  return (
    <>
      <BooksListStyle>
        {books?.map((item) => (
          <BooksItem book={item} key={item.id} />
        ))}
      </BooksListStyle>
    </>
  );
}

const BooksListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
