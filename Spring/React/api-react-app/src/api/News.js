import React, { useState } from "react";
import axios from 'axios';
import '../css/News.css';

function News() {
    const [query, setQuery] = useState(''); // 검색어 state
    const [result, setResult] = useState([]); // 검색 결과 state
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null);

    const newsSearch = async () => {
        setLoading(true); // 로딩 시작
        try {
            const response = await axios.get('http://localhost:9090/api/news', {
                params: { query }
            });
            setResult(response.data.items); // 응답 데이터를 result에 저장, items가 없을 경우 빈 배열로 설정
            console.log(response.data.items);
        } catch (err) {
            setError('뉴스 검색에 실패했습니다.');
            console.error(err);
        } finally {
            setLoading(false); // 로딩 종료
        }
    }

    const handleSearch = (e) => {
        e.preventDefault(); // 새로고침 방지
        if (!query) {
            alert("검색어를 입력하세요");
            return;
        }
        setError(null); // 에러 초기화
        newsSearch(); // 뉴스 검색 함수 호출
    }

    return (
        <div>
            <h1>네이버 뉴스 검색</h1>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="뉴스 이름을 입력하세요."
                />
                <button type="submit" style={{ marginTop: '10px' }}>검색</button>
            </form>

            {loading && <p>로딩 중...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul>
                {Array.isArray(result) && result.length > 0 ? (
                    result.map((news, index) => (
                        <li key={index}>
                            <p>제목 : {news.title}</p>
                            <p>설명 : {news.description}</p>
                            <p>발행일 : {news.pubDate}</p>
                            <a href={news.originallink} target="_blank" rel="noopener noreferrer">원문 보기</a>
                        </li>
                    ))
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </ul>
        </div>
    );
}

export default News;
