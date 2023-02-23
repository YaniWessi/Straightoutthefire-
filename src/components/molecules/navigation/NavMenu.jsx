import React from "react";
import { Link } from 'react-router-dom';


const NavMenu = () => {
    return (
        <div className="navLinks">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className='link'>About Us</Link>
        <a className='link' href="/artists">Artists</a>
        <a className='link' href="/gallery">Gallery</a>
        <a className='link' href="/shop">Shop</a>
        <a className='link' href="/team">Our Team</a>
        </div>
    )
}

export default NavMenu; 