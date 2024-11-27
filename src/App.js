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
    </div>
  );
}

export default App;
