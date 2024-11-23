
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './Home';
import Aboute from './Aboute';
import Contact from './Contact';
<<<<<<< HEAD
import Login from './Login';
=======
import Login from './login';

>>>>>>> 4373f4d10bf716005a7f7cd014cff56c9f1e9c99
function App() {
  return (
    <div className="App">
      <h1>hhh</h1>
     <BrowserRouter>
<<<<<<< HEAD
    
=======
     
>>>>>>> 4373f4d10bf716005a7f7cd014cff56c9f1e9c99
     <NavBar/>
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Aboute' element={<Aboute/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
      
     </BrowserRouter>
<<<<<<< HEAD
     
     
=======
     <Login />
>>>>>>> 4373f4d10bf716005a7f7cd014cff56c9f1e9c99
    </div>
  );
}

export default App;
