import logo from './logo.svg';
import './App.css';
import Parent from './porps/Parent';
import { UserProvider } from './porps/UserContext';
function App() {
  const user = { name: 'John Doe', age: 30 };

  return (
    <div className="App">
      <UserProvider>
        <Parent user={user} />
      </UserProvider>
    </div>
  );
}

export default App;
