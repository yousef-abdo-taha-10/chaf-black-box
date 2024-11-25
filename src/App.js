
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
     {/* <Rating />
     <Question />  */}
     
    

     <br/>
     
    
     </BrowserRouter>

    </div>

  );
}

export default App;
