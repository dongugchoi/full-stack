import React from 'react';

const Login = () => {
    const handleSubmit = (event) => {
        const data = new FornmData(event.target);
        const id = data.get("id");
        const pwd = data.get("pwd");

    }


    return(
        <form noValidate onSubmit={handlesubmit}>
            <table border="1" align='center'>
                <caption>:::로그인:::</caption>
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
                        <input type='submit' value="회원가입"/>
                    </td>
                </tr>
            </table>
        </form>
    )
}
export default Login;