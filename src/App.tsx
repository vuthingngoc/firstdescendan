import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import NavbarMain from './components/Navbar/navbar';
import Homepage from './pages/Homepage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route path="/cbt" element={<Homepage />} />
        <Route path="*" element={<Navigate replace to="/cbt" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
