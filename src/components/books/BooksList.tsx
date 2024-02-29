import { styled } from "styled-components";
import BooksItem from "./BooksItem";
import { Book } from "../../models/book.model";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { QUERYSTRING } from "../../constants/querystring";
import { ViewMode } from "./BooksViewSwitcher";

interface Props {
  books: Book[];
}

export default function BooksList({ books }: Props) {
  const location = useLocation();
  const [view, setView] = useState<ViewMode>("grid");

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewMode);
    }
  }, [location.search]);

  return (
    <>
      <BooksListStyle view={view}>
        {books?.map((item) => (
          <BooksItem book={item} key={item.id} view={view} />
        ))}
      </BooksListStyle>
    </>
  );
}

interface BookListStyleProps {
  view: ViewMode;
}

const BooksListStyle = styled.div<BookListStyleProps>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)"};
  gap: 24px;
`;
