import React, { useState, useContext } from 'react';
import { BoardContext } from '../context/BoardContext';
import { Link, useNavigate } from 'react-router-dom';
import '../css/boardList.css';

const BoardList = () => {
    // Context에서 boardList와 setBoardList를 가져온다.
    const { boardList } = useContext(BoardContext);

    // 현재 페이지 상태를 관리
    const [currentPage, setCurrentPage] = useState(1);

    // 한 페이지당 보여줄 게시물 수 관리
    const [postsPerPage, setPostsPerPage] = useState(3);

    const navigate = useNavigate();

    const handleWritePost = () => {
        navigate('/writepost');
    };

    // 현재 페이지에서 보여줄 게시글의 마지막 인덱스 계산
    const indexOfLastPost = currentPage * postsPerPage;

    // 현재 페이지에서 보여줄 게시글의 첫 번째 인덱스 계산
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // 현재 페이지에서 보여줄 게시글만 slice로 추출
    const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(boardList.length / postsPerPage);

    // 현재 페이지 번호를 변경하는 함수
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 게시물 수 변경
    const handlePostsPerPageChange = (event) => {
        setPostsPerPage(Number(event.target.value));
        setCurrentPage(1); // 게시물 수 변경 시 첫 번째 페이지로 이동
    };

    return (
        <div className='board-container'>
            {/* 제목 */}
            <h1 className='board-title'>게시판</h1>

            {/* 글쓰기 버튼 */}
            <div className='board-button'>
                <button onClick={handleWritePost}>글쓰기</button>
            </div>
            <br />

            {/* 게시글 목록 */}
            <ul className='board-posts'>
                {currentPosts.map((board) => (
                    <li key={board.id} className='board-post-item'>
                        <Link to={`/postdetail/${board.id}`}>{board.title}</Link>
                        <span> | 작성자: {board.author}</span>
                        <span> | 작성 시간: {board.writingTime}</span>
                    </li>
                ))}
            </ul>

            {/* 페이지당 게시물 수를 선택하는 드롭다운 */}
            <div className='board-posts-per-page'>
                <label>
                    게시물 수:{' '}
                    <select
                        value={postsPerPage}
                        onChange={handlePostsPerPageChange}
                    >
                        <option value={3}>3개</option>
                        <option value={5}>5개</option>
                        <option value={7}>7개</option>
                    </select>
                </label>
            </div>

            {/* 페이지 목록 표시 */}
            <div className='board-pagination'>
                {[...Array(totalPages).keys()].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={
                            currentPage === number + 1 ? 'selected' : ''
                        }
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BoardList;
