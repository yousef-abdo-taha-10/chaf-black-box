// <<<<<<< HEAD
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Home';
// // import Aboute from './Aboute';  // تم تصحيح الاسم إلى "About"
// import Contact from './Contact';
// // import DoubleRowNavbar from './components/Navbar/DoubleRowNavbar';
// import NavBar from './components/Navbar/NavBar';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//        <NavBar/>
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* المسار الرئيسي */}
//           {/* <Route path="/Aboute" element={<Aboute/>} /> تم تصحيح اسم المسار */}
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     </div> 
// =======
// <<<<<<< HEAD
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./Home";
// import Aboute from "./Aboute";
// import Contact from "./Contact";
// import Login from "./Login";
// import DoubleRowNavbar from "./components/Navbar/DoubleRowNavbar";
// import Occordion from "./Accordion";
// import Sliddder from "./Sliddder"
// import Rating from "./Rating"
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Aboute" element={<Aboute />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//       <DoubleRowNavbar />
//       <Sliddder />
//       <Occordion />
//       <Rating />
//       <Login />
// =======

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';

// import Home from './Home';
// import Aboute from './Aboute';
// import Contact from './Contact';
// import Login from './Login';
// import Register from './Register';
// import About from './About';
// import DoubleRowNavbar from './components/Navbar/DoubleRowNavbar'
// import Rating from './Rating'
// import Footer from './Footer'

// function App() {
//   return (
//     <div className="App">
      
   
//      <BrowserRouter>

   
//      <DoubleRowNavbar/>
//      <Routes>
      

//       <Route path='/Home' element={<Home/>} />
//       <Route path='/Aboute' element={<Aboute/>}/>
//       <Route path='/Contact' element={<Contact/>}/>
//       {/* <Route path='/Login' element={<Login/>}/> */}
      
     
    
     
//      </Routes>
//      <Login />
//       <Register />
//       <Rating />
//     <About />
//     <Footer />
//      {/* <Rating />
//      <Question />  */}
     
    

//      <br/>
     
    
//      </BrowserRouter>

// >>>>>>> 88f7e4cde36f2c1b739c7679fd517854335aae31
//     </div>

// >>>>>>> c708c51468eb8efe354ca2a3b1bab4f818c03381
//   );
// }

// export default App;
import React from 'react'
//  import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newnav from './Newnav';
import Sliddder from './Sliddder';
import About from './About';
import Rating from './Rating';
import Question from './Question';
import Accordion from './Accordion';
import Footer from './Footer';



const App = () => {
  return (
    <div>
    <Newnav/>
   <Sliddder/>
   <About/>
   <Rating />
   <Question/>
   <Accordion />
   <Footer />
   
    </div>
  )
}

export default App
