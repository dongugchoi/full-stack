
import './App.css';
import { ThemeContext } from './ThemeProvider/ThemeContext'; // 경로 확인
import ThemeSwitcher from './ThemeProvider/ThemeSwitcher';
import React, {useContext} from 'react';



  function App() {

    const { isDarkMode } = useContext(ThemeContext);
    
    return (
    <div>
      {/* <h1>{isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
      <ThemeSwitcher /> */}
      hello
    </div>
  );
}

export default App;
