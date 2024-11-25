import React, { useEffect, useRef, useState } from 'react';
import { call, signup } from '../service/ApiService';

export default function Signup() {
    const userIdRef = useRef();
    const [idCheck,setIdCheck] = useState(null);

    //id 중복 체크
    function isIdCheck(){
        const userId = userIdRef.current.value;
        //GET으로 전달할때
        //call("/users/idCheck?userId="+userId,"GET")
        call("/users/idCheck","POST",{id:userId})
            .then(result => {
                const isAvailable = result.value;
                console.log(result);
                setIdCheck(isAvailable)
                if(userId === ''){
                    alert("아이디를 입력하세요");
                    return;
                }

                if(isAvailable === true){
                    alert("사용가능한 아이디입니다.")
                    return;
                }

                if(isAvailable === false){
                    alert("중복되는 아이디입니다.")
                    return;
                }
            })
    }

    //가입 버튼 
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        const id = data.get("id");
        const pwd = data.get("pwd");
        const name = data.get("name");        
        const email = data.get("email");

        let user = {id:id,pwd:pwd,name:name,email:email} 

        if(idCheck){
            //정보를 가지고 db에 추가 요청
            signup(user)
            .then(result => {
                window.location.href="/";
            })
        }else{
            alert("아이디 중복체크해라");
            return;
        }
    }
    function toLogin(){
        window.location.href="/";
    }
    return(
        <form noValidate onSubmit={handleSubmit}>
            <table border="1" align='center'>
            <caption>:::회원가입:::</caption>
            <tr>
                <th>아이디</th>
                <td>
                    <input name='id' id='id' ref={userIdRef} />
                    <input type='button' value="중복체크" onClick={isIdCheck}/>
                </td>
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
                    <input type='submit' value="가입"/>
                    <input type='button' value="취소" onClick={toLogin}/>
                </td>
            </tr>
        </table>
    </form>
    )
}