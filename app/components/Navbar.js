import React from 'react';
import '../navbar.css';

export default function Navbar() {
  return (
    <nav>
        <img src='../images/logo.png' className="logo" />
        <ul>
            <li><a href="home">Home</a></li>
            <li href="bot">ChatterBot</li>
            <li href="about">About</li>
        </ul>
        <div>
            <a href='*' className='btn'>Log out</a>
        </div>
    </nav>
  )
}
