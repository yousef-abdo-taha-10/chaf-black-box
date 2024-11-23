
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './Home';
import Aboute from './Aboute';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import About from './About';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
     <BrowserRouter>

   
     
     <Routes>
      

      <Route path='/Home' element={<Home/>} />
      <Route path='/Aboute' element={<Aboute/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      {/* <Route path='/Login' element={<Login/>}/> */}
      
     
    
     
     </Routes>
     <Login />
      <Register />
    <About />
     {/* <Rating />
     <Question />  */}
     
    

     <br/>
     
    
     </BrowserRouter>

    </div>

  );
}

export default App;
