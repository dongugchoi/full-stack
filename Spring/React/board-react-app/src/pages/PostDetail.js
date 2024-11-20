import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BoardContext } from '../context/BoardContext';
import CustomButton from '../components/CustomButton';


const PostDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    const { boardList, setBoardList } = useContext(BoardContext); // 게시물 리스트 가져오기
    const navigate = useNavigate();

    const handleDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            const updatedBoardList = boardList.filter((item) => item.id !== post.id);
            setBoardList(updatedBoardList);
            alert('게시글이 삭제되었습니다.');
            navigate('/'); // 삭제 후 메인 페이지로 이동\
            
        }
    };

    // ID로 게시물 찾기
    const post = boardList.find((item) => item.id === parseInt(id));

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <h2>제목: {post.title}</h2>
            <p><strong>작성자:</strong> {post.author}</p>
            <p>{post.writingTime}</p>
            <hr/>
            <p>{post.content || "내용 없음"}</p>
            <hr/>
            <CustomButton label="수정" onClick={() => navigate(`/editpost/${post.id}`)}/>
            <CustomButton label="삭제" onClick={handleDelete}/>
            <CustomButton label="목록으로" onClick={() => navigate("/")}/>
        </div>
    );
};

export default PostDetail;
