import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './components/ThemedComponent';
import { CartProvider } from './contexts/CartContext';
import CartScreen from './components/CartScreen';
import { UserProvider } from './contexts/UserContext';
import HomeScreen from './components/HomeScreen';


const App = () => (
  
  <UserProvider>

      <HomeScreen/>

  </UserProvider>
);

export default App;