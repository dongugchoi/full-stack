import React from 'react';
import { signin } from '../service/ApiService';
import Signup from './Signup';
import { Form } from 'react-router-dom';

const Login = () => {
    const handlesubmit = (event) => {
        event.preventDefault(); 
        const data = new FormData(event.target);
        const id = data.get("id");
        const pwd = data.get("pwd");

        console.log(id);
        console.log(pwd);
        //db에 넘겨 서 아이디 비밀번호 검증받고 토큰 받아서 로컬 스토리지에 저장함
        signin({id:id,pwd:pwd})
    }
    function toSignup(){
        window.location.href="/signup";
    }

    return(
        <form noValidate onSubmit={handlesubmit}>
            <table border="1" align='center'>
                <caption>:::로그인:::</caption>
                    <tbody>
                    <tr>
                        <th>아이디</th>
                        <td><input name='id'/></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td><input name='pwd' type='password'/></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align='center'>
                            <input type='submit' value="로그인"/>
                            <input type='button' value="회원가입" onClick={toSignup}/>
                        </td>
                    </tr>
                </tbody>
            </table >
            
        </form>
    )
}
export default Login;