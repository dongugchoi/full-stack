import React, {useState, useEffect} from "react";

function UserList(){
    const [ posts, SetPosts] =useState({});
    const [ loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null);
    
    useEffect (() => {
        const FetchData = async() => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error('데이터를 불러오는데 실패')
                }

                const data = await response.json();
                SetPosts(data);
            }catch(err){
                SetError(err.message);
            }finally{
                SetLoading(false);
            }
        }
        FetchData();
    },[])

    if(loading){
        return <p>로딩중...</p>
    }

    //에러 발생시 보여줄 내용
    if(error){
        return <p>에러 발생 : {error}</p>
    }

    return(
        <div >
          
            <h1>이름 목록</h1>
            <ul style={{listStyle : 'none'}}>
                {posts.map((post)=>(
                    <li key={post.id}>이름 : {post.name} - 이메일 : {post.email}</li>
                ))}
            </ul>
       
         
        </div>
    )
}

export default UserList