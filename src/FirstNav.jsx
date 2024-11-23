import React from 'react'
import './FirstNav.css'

const FirstNav = () => {
    return (
        <div>
            <header className="navbar">
                <div className="navbar__left">
                    <div className="navbar__logo">
                        <img src="img\Chef_logo.png" alt="Chef Logo" className="navbar__logo-image" />
                        <span>Chef</span>
                        <div className="navbar__location"><img src="icons\Location marker.svg" alt="" />Egypt</div>

                    </div>
                    <img src="icons\Group.svg" alt="" className='immmg' />
                    <button className='navbar__left-button'>Fillter</button>
                </div>
                
                <div className="navbar__search">
                    <input
                        type="text"
                        placeholder="Find your favourite meal"
                        className="navbar__search-input"
                    />
                    <img src='icons\Search.svg' alt='' className='search-icon' />
                    <nav className="navbar__links">
                        <a href="#home">Home</a>
                        <a href="#about">About us</a>
                        <a href="#contact">Contact</a>
                        <a href="#reviews">Reviews</a>
                    </nav>
                </div>

                <div className="navbar__actions">
                    <a href="#orders" className="navbar__icon"><img src="icons\Cube.svg" alt="" />Orders</a>
                    <a href="#favorites" className="navbar__icon"><img src="icons\Heart.svg" alt="" />Favorites</a>
                    <a href="#cart" className="navbar__icon">
                        Cart<img src="icons\Shopping cart.svg" alt="" /> <span className="navbar__cart-count">3</span>
                    </a>
                    <button className="navbar__sign-in">Sign in</button>
                </div>
            </header>

        </div>
    )
}

export default FirstNav