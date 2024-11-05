import React from "react";
import { useParams } from "react-router-dom";

function Lang() {
    const { langId } = useParams();

    const content = [
        { id: 'Ko', 
        greeting: '안녕하세요!', 
        description: '이것은 한국어 페이지입니다.' },
        { id: 'En', 
        greeting: 'Hello!', 
        description: 'This is an English page.' },
        { id: 'Jp', 
        greeting: 'こんにちは！', 
        description: 'これは日本語のページです。' },

    ];

    const selectedContent = content.find(item => item.id === langId);
  

    if (!selectedContent) {
      return <div>지원하지 않는 언어입니다.</div>;
    }

    return (
        <div>
            <h1>{selectedContent.greeting}</h1>
            <p>{selectedContent.description}</p>
        </div>
       
    );
}

export default Lang;
