import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./Home";
import Aboute from "./Aboute";
import Contact from "./Contact";
import Login from "./Login";
import Occordion from "./Accordion";
import Sliddder from "./Sliddder";
import Rating from "./Rating";
import Navbar2 from "./components/Navbar/Navbar2";
import Products from "./CURD/Products";
import Cart from "./CURD/Cart"; // Create a Cart component

function App() {
  return (
    <div className="App">
      <Navbar2 /> {/* Your Navbar component */}
      <br />
      <Sliddder />
      <Occordion />
      <Rating />
      <Products />
      {/* Define your Routes */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboute" element={<Aboute />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> {/* Cart page route */}
      </Routes>
    </div>
  );
}

export default App;