import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lang from './Lang';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Home/:langId/Home" element={<Lang />} />
            </Routes>
        </div>
    );
}

export default App;
