import React from "react";
import { Link } from 'react-router-dom';


const NavMenu = () => {
    return (
        <div className="navLinks">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className='link'>About Us</Link>
        <Link to="/artist" className='link'>Artists</Link>
        <Link to="/gallery" className='link'>Gallery</Link>
        <Link to="/shop" className='link'>Shop</Link>
        <Link to="/team" className='link'>Our Team</Link>
        </div>
    )
} 

export default NavMenu; 