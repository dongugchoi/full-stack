import React from 'react';
import { UserProvider } from './UserContext';
import Parent from './Parent';

function App() {
  return (
    <UserProvider>
      <Parent />
    </UserProvider>
  );
}

export default App;