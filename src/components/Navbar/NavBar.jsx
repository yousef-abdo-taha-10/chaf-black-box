import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "../Navbar/NavBarr.css";
import { Container ,Nav,Badge,NavDropdown , Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
 <>
 <Navbar className='navbar-contenier' expand="sm">
  <Navbar.Brand>
  <img
    sec="\Images\Chef_logo_design_vector_illustration__Restaurant_logo-removebg-preview 1.png"
        alt="logo"
             />
              <span className="brand">Chef</span>
              

  </Navbar.Brand>

      
   
    <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
<Navbar.Collapse>
  
 <div className='strong'>
  <form className='nav-form'>
    
    <input type='search' className='input' placeholder='Find your favourite meal'   aria-label="Search"/>
    <svg className='icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.00077C8.93913 6.00077 7.92172 6.42219 7.17157 7.17234C6.42143 7.92248 6 8.9399 6 10.0008C6 11.0616 6.42143 12.079 7.17157 12.8292C7.92172 13.5793 8.93913 14.0008 10 14.0008C11.0609 14.0008 12.0783 13.5793 12.8284 12.8292C13.5786 12.079 14 11.0616 14 10.0008C14 8.9399 13.5786 7.92248 12.8284 7.17234C12.0783 6.42219 11.0609 6.00077 10 6.00077ZM4 10.0008C3.99988 9.05647 4.22264 8.12548 4.65017 7.28351C5.0777 6.44154 5.69792 5.71236 6.4604 5.15529C7.22287 4.59822 8.10606 4.22898 9.03815 4.0776C9.97023 3.92622 10.9249 3.99698 11.8245 4.28412C12.724 4.57126 13.5432 5.06667 14.2152 5.73006C14.8872 6.39346 15.3931 7.2061 15.6919 8.1019C15.9906 8.9977 16.0737 9.95136 15.9343 10.8853C15.795 11.8193 15.4372 12.7072 14.89 13.4768L19.707 18.2938C19.8892 18.4824 19.99 18.735 19.9877 18.9972C19.9854 19.2594 19.8802 19.5102 19.6948 19.6956C19.5094 19.881 19.2586 19.9862 18.9964 19.9884C18.7342 19.9907 18.4816 19.8899 18.293 19.7078L13.477 14.8918C12.5794 15.53 11.5233 15.9089 10.4247 15.9869C9.326 16.0648 8.22707 15.8389 7.2483 15.3337C6.26953 14.8286 5.44869 14.0638 4.87572 13.1231C4.30276 12.1824 3.99979 11.1022 4 10.0008Z" fill="#B0BABF"/>
                </svg> 
    
  </form>
   </div>
    <button  className='sign-in'>Sign in</button>
</Navbar.Collapse>
 </Navbar>
 </>

  )
}

export default NavBar