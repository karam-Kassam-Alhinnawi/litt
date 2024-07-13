import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import NotFound from './pages/404';
import ReserveMade from './pages/ReserveMade';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     
     
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/reserve" element={<Reservation/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path='/reservemade' element={<ReserveMade/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
