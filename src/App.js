import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import WeekSpecial from './components/WeekSpecial';
import Home from './pages/Home';
import Reservation from './pages/Reservation';

function App() {
  return (
    <>
     
     
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/reserve" element={<Reservation/>}/>
    </Routes>
    <WeekSpecial/>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
