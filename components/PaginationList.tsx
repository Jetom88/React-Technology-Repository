import styled from "styled-components";

type ListProps = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (current: number) => void;
};

const PaginationList = ({ postsPerPage, totalPosts, paginate }: ListProps) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <StyledList>
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          className="pagination_item"
          onClick={() => paginate(pageNum)}
          style={{
            border: "1px solid black",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          {pageNum}
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-content: center;
`;

export default PaginationList;
