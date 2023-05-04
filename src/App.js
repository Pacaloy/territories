import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './UserContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  const [isAuthorize, setIsAuthorize] = useState(false);

  return (
    <UserContext.Provider value={{isAuthorize, setIsAuthorize}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
