import React, { useEffect, useState } from "react";
import { call } from "../service/ApiService";

function MyInfo() {

    const [user, setUser] = useState({
        userId: '',
        pwd: '',
        name: '',
        email: ''
    });

    useEffect(() => {
        call("/users/name", "GET")
            .then(result => setUser(result.data[0]))
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    if (!user.userId) {
        return <div>Loading...</div>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const userId = user.userId;
        const pwd = data.get("pwd");
        const name = data.get("name");
        const email = data.get("email");

        console.log('userId :', userId);
        console.log('pwd :', pwd);
        console.log('name :', name);
        console.log('email :', email);
        call("/users", "PUT", { userId: userId, pwd: pwd, name: name, email: email })
            .then(result => {
                window.location.href = "/main";
            })
    }

    return (
        <div>
            <form noValidate onSubmit={handleSubmit}>
                <table border="1" align="center">
                    <caption>:::내 정보:::</caption>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>{user.userId}</td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td><input name="pwd" type="password" value={user.pwd} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td><input name="name" value={user.name} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td><input name="email" value={user.email} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">수정</button>
                                <button type="button" onClick={() => window.location.href = "/main"}>취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default MyInfo;