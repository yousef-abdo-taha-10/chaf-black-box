
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './Home';
import Aboute from './Aboute';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      
     
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Aboute' element={<Aboute/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
     <h1>hello1</h1>
    </div>
  );
}

export default App;
