<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Aboute from "./Aboute";
import Contact from "./Contact";
import Login from "./Login";
import DoubleRowNavbar from "./components/Navbar/DoubleRowNavbar";
import Occordion from "./Accordion";
import Sliddder from "./Sliddder"
import Rating from "./Rating"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboute" element={<Aboute />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <DoubleRowNavbar />
      <Sliddder />
      <Occordion />
      <Rating />
      <Login />
=======

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Aboute from './Aboute';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import About from './About';
import DoubleRowNavbar from './components/Navbar/DoubleRowNavbar'
import Rating from './Rating'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      
   
     <BrowserRouter>

   
     <DoubleRowNavbar/>
     <Routes>
      

      <Route path='/Home' element={<Home/>} />
      <Route path='/Aboute' element={<Aboute/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      {/* <Route path='/Login' element={<Login/>}/> */}
      
     
    
     
     </Routes>
     <Login />
      <Register />
      <Rating />
    <About />
    <Footer />
     {/* <Rating />
     <Question />  */}
     
    

     <br/>
     
    
     </BrowserRouter>

>>>>>>> 88f7e4cde36f2c1b739c7679fd517854335aae31
    </div>

  );
}

export default App;
