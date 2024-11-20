import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const PostListContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column; /* 게시물을 세로로 배치 */
  gap: 20px; /* 게시물 간 간격 */
  position: relative; /* 드롭다운 위치 기준 */
  margin-bottom: 40px; /* 아래 여백 */
`;

const PostItem = styled.div`
  display: flex; /* 게시물 내용을 한 행으로 배치 */
  justify-content: space-between; /* 요소 간 간격 균등 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const WritingButton = styled.button`
  position: absolute;
  top: -40px; /* 첫 번째 게시글 위로 위치 */
  right: 0; /* 오른쪽 끝에 고정 */
  padding: 10px 15px;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5f9ea0;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center; /* 페이지 버튼을 가운데 정렬 */
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: lightblue;
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  border-radius: 5px;

`;

const SelectContainer = styled.div`
  position: absolute;
  bottom: -40px; /* 마지막 게시물 아래로 위치 */
  right: 0; /* 오른쪽 끝에 고정 */
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const Header = styled.header`
    margin-bottom:10px;
`

const Board = () => {
  const [boardList] = useState([
    { id: 1, title: "첫 번째 게시글", author: "작성자1", writingTime: "2024-11-20 12:00" },
    { id: 2, title: "두 번째 게시글", author: "작성자2", writingTime: "2024-11-20 13:00" },
    { id: 3, title: "세 번째 게시글", author: "작성자3", writingTime: "2024-11-20 14:00" },
    { id: 4, title: "네 번째 게시글", author: "작성자4", writingTime: "2024-11-20 15:00" },
    { id: 5, title: "다섯 번째 게시글", author: "작성자5", writingTime: "2024-11-20 16:00" },
    { id: 6, title: "여섯 번째 게시글", author: "작성자6", writingTime: "2024-11-20 17:00" },
    { id: 7, title: "일곱 번째 게시글", author: "작성자7", writingTime: "2024-11-20 18:00" },
    { id: 8, title: "여덟 번째 게시글", author: "작성자8", writingTime: "2024-11-20 19:00" },
    { id: 9, title: "아홉 번째 게시글", author: "작성자9", writingTime: "2024-11-20 20:00" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3); // 한 페이지에 표시할 게시글 수

  // 현재 페이지에 표시할 게시글
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(boardList.length / postsPerPage);

  // 게시물 수 변경 핸들러
  const handlePostsPerPageChange = (e) => {
    setPostsPerPage(Number(e.target.value));
    setCurrentPage(1); // 페이지를 첫 페이지로 초기화
  };

  return (
    <Container>
      <h2>게시판</h2>
      <PostListContainer>
        <WritingButton>글쓰기</WritingButton>
        {currentPosts.map((post) => (
          <PostItem key={post.id}>
            <h3>{post.title}</h3>
            <p><strong>작성자:</strong> {post.author}</p>
            <p>{post.writingTime}</p>
          </PostItem>
        ))}
        <SelectContainer>
          <label htmlFor="postsPerPage">게시물 수: </label>
          <Select
            id="postsPerPage"
            value={postsPerPage}
            onChange={handlePostsPerPageChange}
          >
            <option value="3">3개</option>
            <option value="5">5개</option>
            <option value="7">7개</option>
          </Select>
        </SelectContainer>
      </PostListContainer>
      <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </Container>
  );
};

export default Board;
