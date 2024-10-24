import React, { useState } from "react";
import axios from 'axios';

function BookSearch() {
    const [query, setQuery] = useState(''); // 검색어 state
    const [result, setResult] = useState([]); // 검색 결과 state
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 오류 상태

    // 네이버 도서 검색 API 호출 함수
    const searchBooks = async () => {
        setLoading(true);
        setError(null); // 이전 오류 초기화

        try {
            const response = await axios.get('http://localhost:9090/api/books', {
                params: { query }
            });
            setResult(response.data.items); // 검색 결과를 result 상태에 저장
            console.log(response.data.items);  
        } catch (err) {
            setError('도서 검색에 실패했습니다.');
        } finally {
            setLoading(false); // 로딩 상태 종료
        }
    }

    // 검색버튼 클릭시 호출
    const handleSearch = (e) => {
        e.preventDefault(); // 새로고침 방지
        if (!query) {
            alert("검색어를 입력하세요");
            return;
        }
        searchBooks();
    }

    return (
        <div>
            <h1>네이버 도서 검색</h1>
            <form onSubmit={handleSearch}>
                <input type='text' value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="책 이름을 입력하세요." 
                />
                <button type="submit" style={{ marginTop: '10px' }}>검색</button>
            </form>

            {loading && <p>로딩 중...</p>} {/* 로딩 상태 표시 */}
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* 오류 메시지 표시 */}

            <ul>
                {result.map((book) => (
                    <li key={book.isbn}>
                        <img src={book.image} alt={book.title} />
                        <p>제목 : {book.title}</p>
                        <p>저자 : {book.author}</p>
                        <p>출판사 : {book.publisher}</p>
                        <p>가격 : {book.discount ? `${book.discount}원` : '가격 정보 없음'}</p>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">더보기</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookSearch;
