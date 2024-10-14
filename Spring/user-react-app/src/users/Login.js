import React from 'react';
import { signin } from '../service/ApiService';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 제출 동작 방지
        const data = new FormData(event.target);
        const id = data.get("id");
        const pwd = data.get("pwd");

        // 로그인 처리 로직 추가
        console.log("아이디:", id);
        console.log("비밀번호:", pwd);
        
        //db에 넘겨서 아이디 비밀번호 검증받고 토큰을 받아서
        //로컬스토리지에 저장

        signin({id : id, pwd:pwd})
        
    };

    const handleSignup = (event) => {
        event.preventDefault(); // 기본 제출 동작 방지
        // 회원가입 처리 로직 추가
        console.log("회원가입 버튼 클릭됨");
    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <table border="1" align='center'>
                <caption>:::로그인:::</caption>
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td><input name='id' required /></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td><input name='pwd' type='password' required /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align='center'>
                            <input type='submit' value="로그인" />
                            <input type='button' value="회원가입" onClick={handleSignup} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Login;
