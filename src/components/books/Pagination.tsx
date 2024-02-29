import { styled } from "styled-components";
import { Pagination as IPagination } from "../../models/pagination.model";
import { LIMIT } from "../../constants/pagination";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

interface Props {
  pagination: IPagination;
}

export default function Pagination({ pagination }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalCount, currentPage } = pagination;
  const pages: number = Math.ceil(totalCount / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());
    setSearchParams(newSearchParams);
  };

  console.log(currentPage);

  return (
    <>
      <PaginationStyle>
        {pages > 0 && (
          <ol>
            {Array(pages)
              .fill(0)
              .map((_, index) => (
                <Button
                  key={index}
                  size="small"
                  schema={
                    index + 1 === Number(currentPage) ? "primary" : "normal"
                  }
                  onClick={() => handleClickPage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
          </ol>
        )}
      </PaginationStyle>
    </>
  );
}

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;

  ol {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
