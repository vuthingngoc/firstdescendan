import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import NavbarMain from './components/Navbar/navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route exact path="/cbt" element={<Homepage />} />
        <Route path="*" element={<Navigate replace to="/cbt" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
