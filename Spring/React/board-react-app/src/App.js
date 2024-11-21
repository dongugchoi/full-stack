import React, {useState} from "react";
import { BoardContext } from "./context/BoardContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BoardList from "./pages/BoardList";
import Write from "./pages/Write";
import WritePost from "./pages/WritePost";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";


const App =() =>{

const [boardList, setBoardList] = useState([]);

  return(
    <BoardContext.Provider value={{boardList,setBoardList}}>
      <Router>
        <Routes>
          <Route path="/" element={<BoardList/>}/>
          <Route path="/writepost" element={<WritePost/>}/>
          <Route path="/postdetail/:id" element={<PostDetail/>}/>
          <Route path="/editpost/:id" element={<EditPost/>}/>
        </Routes>
      </Router>
    </BoardContext.Provider>
  )

}

export default App;