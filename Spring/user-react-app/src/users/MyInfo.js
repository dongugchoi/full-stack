import React ,{useEffect, useState} from "react";
import { call } from "../service/ApiService";


function MyInfo() {

    const[user,setUser] = useState({
        userId:'',
        pwd:'',
        name:'',
        email:''
    });

    useEffect(() => {
        
        call("/users/name", "GET")
        .then(result => setUser(result.data[0]))
    
    },[])

    const handleChange =(e) =>{
        const{name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    if(!user.userId){
        return <div>Loading...</div>
    }


    return (
        <div>
         

            <form noValidate> 
                <table border="1" align="center">
                    <caption>:::내 정보:::</caption>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>{user.userId}</td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td><input name="pwd" type="password" value={user.pwd} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td><input name="name" value={user.name} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td><input name="email" value={user.email} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="button">수정</button>
                                <button type="button">취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
    
        </div>
     
    );
}

export default MyInfo;
