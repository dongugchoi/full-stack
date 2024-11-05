import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const contents = [
        { id: 'Ko', name: '한국어' },
        { id: 'En', name: '영어' },
        { id: 'Jp', name: '일본어' },
        {   id : 'None',
            name: '다른 언어 없음',
            description: '언어 선택을 다시 해주세요.'}
    ];

    return (
        <div>
            <h1>외국어 선택</h1>
            <ul>
                {contents.map(content => (
                    <li key={content.id}>
                        <Link to={`${content.id}/Home/`}>{content.name}</Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
