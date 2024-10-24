import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MultiButtons from './MultiButtons';
import Address from './api/Address';
import BookSearch from './api/BookSearch';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MultiButtons />} />
            <Route path="/address" element={<Address />} />
            <Route path="/search" element={<BookSearch />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
