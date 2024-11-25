import React, { createContext, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = {
    isDarkMode,
    toggleTheme,
    styles: isDarkMode ? darkThemeStyles : lightThemeStyles,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// 라이트 테마 스타일
const lightThemeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
});

// 다크 테마 스타일
const darkThemeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
