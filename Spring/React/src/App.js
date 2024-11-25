import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { call, signout } from './service/ApiService';
import MyInfo from './users/MyInfo';

function App() {
  const [user,setUser] = useState([]);

  const [modify,setModify] = useState(false);

  useEffect(() =>{
    call("/users/name","GET")
    .then(result => {setUser(result.data)})
  },[])
  function logout(){
    signout();
  }

  function isOpen(){
    if(!modify){
      setModify(true);
    }else{
      setModify(false);
    }
  }
  return (
    <div className="App">
      {user.length > 0 && (<p>{user[0].name}환영함 메인 화면임</p>)}
      <button onClick={logout}>로그아웃</button>
      <button onClick={isOpen}>정보수정</button>
      {modify && <MyInfo/>}
    </div>
  );
}

export default App;
