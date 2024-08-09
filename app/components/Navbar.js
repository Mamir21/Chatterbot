import React from 'react';
import '../globals.css';

export default function Navbar() {
  return (
    <div className="navbar">
        <img src='../public/images/logo.png' className="logo" />
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="bot">ChatterBot</a></li>
            <li><a href="about">About</a></li>
        </ul>
        <div>
            <a href='*' className='btn'>Log out</a>
        </div>
    </div>
  )
}
