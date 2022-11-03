import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
// import NavbarMain from './components/Navbar/navbar';
import Homepage from './pages/Homepage';
import ThreeJS from './pages/ThreeJS';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cbt" element={<Homepage />} />
        <Route path="/threejs" element={<ThreeJS />} />
        <Route path="*" element={<Navigate replace to="/cbt" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
