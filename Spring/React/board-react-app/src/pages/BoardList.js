import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css/boardList.css';

const BoardList = () => {
    // 게시글 리스트 상태 관리
    const [boardList, setBoardList] = useState([]);

    
    // 현재 페이지 상태를 관리
    const [currentPage, setCurrentPage] = useState(1);

    // 한 페이지당 보여줄 게시물 수 관리
    const [postsPerPage, setPostsPerPage] = useState(3);

    const navigate = useNavigate();

    // 백엔드에서 데이터를 가져오는 함수
    const fetchBoardList = async () => {
        try {
            const response = await axios.get('http://localhost:7070/api/board/all');
            //response.data에 들어있는 내용
            //error와 data이다.
            setBoardList(response.data.data); // 가져온 데이터를 상태로 설정
            console.log('가져온 데이터:', response.data.data); // 가져온 데이터 확인
        } catch (error) {
            console.error('게시판 데이터를 가져오는 중 오류 발생:', error);
        }
    };

    // 컴포넌트가 렌더링될 때 데이터를 가져옴
    useEffect(() => {
        fetchBoardList();
    }, []);

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

    const handleWritePost = () => {
        navigate('/writepost');
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
                {boardList.length > 0 ? (currentPosts.map((board) => (
                    <li key={board.id} className='board-post-item'>
                        <Link to={`/postdetail/${board.id}`}>{board.title}</Link>
                        <span> | 작성자: {board.author}</span>
                        <span> | 작성 시간: {board.writingTime}</span>
                    </li>
                ))) : (<p>게시글이 없습니다.</p>)}
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
