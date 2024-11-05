import React, {createContext, useState} from "react";


//Context 생성하기
export const ThemeContext = createContext();

//ThemeProvider 컴포넌트
export const ThemeProvider = ({Children}) => {
const [isDarkMode, setIsDarkMode] = useState(false);

//다크모드와 라이트모드를 전하는 함수
const toggleTheme = () => {
  setIsDarkMode((prevMode) => !prevMode);
};

  return(
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme}}>
      {Children}
    </ThemeContext.Provider>
  );
};