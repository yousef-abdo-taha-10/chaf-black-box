import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Aboute from './Aboute';  // تم تصحيح الاسم إلى "About"
import Contact from './Contact';
import DoubleRowNavbar from './components/Navbar/DoubleRowNavbar';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} /> {/* المسار الرئيسي */}
          <Route path="/Aboute" element={<Aboute/>} /> {/* تم تصحيح اسم المسار */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
