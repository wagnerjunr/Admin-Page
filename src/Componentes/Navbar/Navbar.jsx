import React from 'react'
import logo_image from './image/nav-logo.svg'


import './navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className='navbar-container'>
                <section className='navbar-image'>
                    <img src={logo_image}></img>
                </section>
            </div>
            <hr></hr>
        </div>
    )
}

export default Navbar;
