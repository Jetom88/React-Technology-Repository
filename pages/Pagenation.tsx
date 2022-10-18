import { useEffect, useState } from "react";
import PaginationList from "../components/PaginationList";
import Posts from "../components/Posts";

//도움된 블로그 https://velog.io/@ksh4820/React-Pagination-%EA%B5%AC%ED%98%84
const Pagenation = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage; // 마지막 post의 index 번호
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //첫 번째 post의 index 번호
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 각 페이지에서 보여질 포스트 배열

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Posts posts={currentPosts} />
      <PaginationList
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Pagenation;
