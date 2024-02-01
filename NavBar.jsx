import React from 'react';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='nav-container'>
    <div className='nav-logo'>
    My logo
    </div>
    <div className='nav-about'>
    <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Features</li>
      <li>Contact us</li>
    </ul>

    </div>
    </div>

  );
}

export default NavBar