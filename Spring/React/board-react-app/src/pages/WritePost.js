import React, { useState, useContext } from 'react'
import { BoardContext } from '../context/BoardContext'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'


const WritePost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const {boardList, setBoardList} = useContext(BoardContext);
    

    const savePost = (e) =>{
        e.preventDefault();

        const newPost = {
            id: boardList.length+1,
            title,
            author,
            content,
            writingTime:new Date().toLocaleString(),
        }
        
        //새로운 게시글을 배열에 추가
        setBoardList([newPost, ...boardList])

        //작성 후 메인화면으로 이동하기
        alert("게시물이 등록되었습니다.");
        Navigate("/");
    }
    const Navigate = useNavigate();

    const backToboard = () => {
        Navigate("/");
    }

    return (
        <div>
            <h1>글쓰기</h1>
            <form>
                <CustomInput label="제목" value={title} onchange={(e) => { setTitle(e.target.value) }} />
                <CustomInput label="작성자" value={author} onchange={(e) => { setAuthor(e.target.value) }} />
                <CustomInput label="내용" multiline rows={6} value={content} onchange={(e) => setContent(e.target.value)} />

                <div>
                    <CustomButton label="저장" onClick={savePost} />
                    <CustomButton label="취소" variant='outlined' color='secondary' onClick={backToboard} />
                </div>
            </form>
        </div>
    )
}

export default WritePost
