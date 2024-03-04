import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { Book } from "@/models/book.model";

import { getImgSrc } from "@/utils/image";
import { formatNumber } from "@/utils/format";

import { FaHeart } from "react-icons/fa";
import { ViewMode } from "@/components/Books/BooksViewSwitcher";

interface BookItemProps {
  book: Book;
  $view?: ViewMode;
}

export default function BooksItem({ book, $view }: BookItemProps) {
  return (
    <>
      <BooksItemStyle $view={$view}>
        <Link to={`/books/${book.id}`}>
          <div className="img">
            <img src={getImgSrc(book.img)} alt={book.title} />
          </div>
          <div className="content">
            <h2 className="title">{book.title}</h2>
            <p className="summary">{book.summary}</p>
            <p className="author">{book.author}</p>
            <p className="price">{formatNumber(book.price)}원</p>
            <div className="likes">
              <FaHeart /> {book.likes}
            </div>
          </div>
        </Link>
      </BooksItemStyle>
    </>
  );
}

const BooksItemStyle = styled.div<Pick<BookItemProps, "$view">>`
  a {
    display: flex;
    flex-direction: ${({ $view }) => ($view === "grid" ? "column" : "row")};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }

  .img {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow: hidden;
    width: ${({ $view }) => ($view === "grid" ? "auto" : "160px")};
    img {
      max-width: 100%;
    }
  }

  .content {
    padding: 16px;
    position: relative;
    flex: ${({ $view }) => ($view === "grid" ? "0" : "1")};

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 12px 0;
    }
    .summary {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }
    .author {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }
    .price {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
      font-weight: 700;
    }

    .likes {
      display: inline-flex;
      align-items: center;
      position: absolute;
      gap: 4px;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.primary};
      margin: 0 0 4px 0;
      border-radius: ${({ theme }) => theme.borderRadius.default};
      border: 1px solid ${({ theme }) => theme.color.secondary};
      padding: 4px 12px;
      bottom: 16px;
      right: 16px;

      svg {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
