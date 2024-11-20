import React, { useState, useContext } from 'react';
import '../css/Write.css';
import { useNavigate } from 'react-router-dom';
import { BoardContext } from '../context/BoardContext';

const Write = () => {
    const navigate = useNavigate();
    const { boardList, setBoardList } = useContext(BoardContext);

    // 입력 필드 상태 관리
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        if (!title || !author || !content) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        const newPost = {
            id: boardList.length + 1, // 고유 ID
            title,
            author,
            writingTime: new Date().toLocaleString(), // 현재 시간
            content,
        };

        // 새 게시글을 배열의 맨 앞에 추가
        setBoardList([newPost, ...boardList]);

        navigate('/'); // 메인 화면으로 이동
    };

    return (
        <div className='write-container'>
            <h2 className='write-title'>글쓰기</h2>
            <div className='write-input-group'>
                <input
                    className='write-input'
                    type='text'
                    placeholder='제목'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='write-input-group'>
                <input
                    className='write-input'
                    type='text'
                    placeholder='작성자'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className='write-input-group'>
                <textarea
                    className='write-textarea'
                    placeholder='내용'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <div className='write-buttons'>
                <button className='write-button save' onClick={handleSave}>
                    저장
                </button>
                <button className='write-button cancel' onClick={() => navigate('/')}>
                    취소
                </button>
            </div>
        </div>
    );
};

export default Write;
