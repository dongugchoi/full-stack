import React from 'react';
// import { Container,Grid,Typography,TextField,Button } from '@mui/material';
// import { signup } from './service/ApiService';
// import { Link } from 'react-router-dom';

export default function Signup() {
    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     //오브젝트에서 from에 저장된 데이터를 맵의 형태로 바꿔줌
    //     const data = new FormData(event.target);
    //     const username = data.get("username");
    //     const password = data.get("password");
    //     signup({username:username,password:password})
    //     .then(response =>{
    //         //계정 생성 성공 시 login페이지로 리다이렉트
    //         window.location.href="/login";
    //     })
    // }
    return(
        <table border="1" align='center'>
        <caption>:::회원가입:::</caption>
        <tr>
            <th>아이디</th>
            <td><input name='id'/></td>
            <td><input type='button' value="중복체크"/></td>
        </tr>
        <tr>
            <th>비밀번호</th>
            <td><input name='pwd' type='password'/></td>
        </tr>
        <tr>
            <th>이름</th>
            <td><input name='name'/></td>
        </tr>
        <tr>
            <th>이메일</th>
            <td><input name='email'/></td>
        </tr>
        <tr>
            <td colSpan="2" align='center'>
                <input type='button' value="가입"/>
                <input type='button' value="취소"/>
            </td>
        </tr>
    </table>
    )
}
