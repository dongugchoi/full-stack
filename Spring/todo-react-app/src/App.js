import './App.css';
import Counter from './Counter';

import React, {useEffect, useState} from 'react';
import {Container,List, Paper,Grid,Button,AppBar,Toolbar,Typography} from "@mui/material";
import Todo from './Todo'; // Todo 컴포넌트를 import
import AddTodo from './addTodo';
import { call, signout } from './service/ApiService';

//컴포넌트
//페이지에 렌더링 할 React 엘리먼트를 반환하는 작고 재사용 가능한 코드조작
function App() {
  //todo를 가지고 있는 state
  const [items, setItems] = useState([]);
  // 로딩 여부를 가리는 state
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
  call("/todo","GET")
  .then(result => {
    setItems(result.data);
    setLoading(false);
  })},[])

const editItem = (item) => {
  // setItems([...items]);
  call("/todo","PUT",item)
   .then(result => setItems(result.data))
};


const deleteItem = (item) =>{
  // //삭제할 아이템을 찾는다.
  // const newItems = items.filter(e => e.id !== item.id);
  // // setItems((items) => items.filter((item) => item.id !== id));
  // //삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
  // setItems([...newItems]);
  call("/todo", "DELETE", item)
      .then(result => setItems(result.data))
}

const addItem =(item) => {
 call("/todo", "POST",item)
 .then(result => setItems(result.data))
};



//map() -> 반복문 안에 들어있는 내용을 하나씩 꺼내서 처리한다.
//key : 요소의 리스트를 만들 때 ,React에서 컴포넌트를 렌더링 했을 때
//어떤 아이템이 변경되었는지 빠르게 감지하기 위해 사용한다.
//만약 key가 설정되지 않았다면 가상 DOM을 순차적으로 비교하면서 감지하기 때문에
//kEY가 없을때보다 속도가 느리다.
let todoItems = items.length > 0 && (
  <Paper style={{margin:16}}>
    <List>
    {items.map((item) =>(
      <Todo item={item} 
      key={item.id}
      editItem ={editItem}
      deleteItem={deleteItem}/>
    ))}
    </List>
  </Paper>
);


//JSX문법 : 자바스크립트 코드 안에 HTML코드가 들어가는 것
//Babel : JSX로 작성된 자바스크립트를 순수 자바스크립트로 만들어주는 라이브러리
{/* props를 컴포넌트에 전달하기
  이름={useState값} */
}
//navigationBar 추가
let navigationBar = (
  <AppBar position = "static">
    <Toolbar>
      <Grid justifyContent= "space-between" container>
        <Grid item>
            <Typography variant='h6'>
                오늘의 할일
            </Typography>
        </Grid>
        <Grid item>
          <Button color='inherit' raised onClick={signout}>로그아웃</Button>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

 //로딩중이 아닐 때 렌더링할 화면
 let todoListPage = (
  <div className="App">
    {navigationBar}
      <Container maxWidth="md">
      <AddTodo addItem={addItem} />
    {/* props를 컴포넌트에 전달하기
    이름={useState값} */}
    <div className="TodoList">
        {todoItems}
    </div>
      </Container>
  </div>
 )

 //로딩중일 때 렌더링 할 부분
 let loadingPage = <h1>로딩중...</h1>
 let content = loadingPage;
 if(!loading){
    content = todoListPage;
 }


  return (
    <div className="App">
      {content}
    </div>
  );
}

//해당 파일에서는 하나의 컴포넌트만을 내보낸다.
//export default 구문을 사용해 내보낸 컴포넌트는 중괄호({})를 사용하지 않고
//불러올 수 있으며, 이름 또한 원하는 이름으로 바꿔서 불러올 수 있다.
export default App;
