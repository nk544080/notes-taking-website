import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; 
import SignUpPage from './pages/SignUpPage'; 
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignUpPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
