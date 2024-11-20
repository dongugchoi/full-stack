import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BoardContext } from '../context/BoardContext';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const EditPost = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    const { boardList, setBoardList } = useContext(BoardContext);
    const navigate = useNavigate();

    // 게시글 찾기
    const post = boardList.find((item) => item.id === parseInt(id));
    const [title, setTitle] = useState(post ? post.title : '');
    const [content, setContent] = useState(post ? post.content : '');

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    const handleSave = () => {
        // 게시글 업데이트
        const updatedBoardList = boardList.map((item) =>
            item.id === post.id ? { ...item, title, content } : item
        );
        setBoardList(updatedBoardList);

        alert('게시글이 수정되었습니다.');
        navigate(`/postdetail/${post.id}`); // 수정 후 상세 페이지로 이동
    };

    return (
        <div>
            <h2>게시글 수정</h2>
            <CustomInput
                label="제목"
                value={title}
                onchange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="10"
                style={{ width: '100%', marginTop: '10px', padding: '10px' }}
            />
            <div style={{ marginTop: '20px' }}>
                <CustomButton label="저장" onClick={handleSave} />
                <CustomButton label="취소" onClick={() => navigate(`/postdetail/${post.id}`)} />
            </div>
        </div>
    );
};

export default EditPost;
