// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import NotFound from './NotFound';
import './App.css';
import PrivateRoute from './PrivateRoute';
import Login from './Login';


function App() {
  //실제로는 사용자 인증상태를 확인해야 한다.
  const isAuthenticated = false;



  return (
    <div className="App">
        <Routes>
          {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}

          {/* / : root 경로 */}
          {/* 맨처음경로를 root경로라고 부른다. */}
          {/* <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound />} /> */}


          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>} 
                                     isAuthenticated={isAuthenticated} />} />
        </Routes>
    </div>
  );
}

export default App;