import React from 'react';
import NavLink from './NavLink';
import '../navbar.css';

export default function Navbar() {
  return (
    <nav>
        <img src='/images/logo.png' className="logo" />
        <ul>
            <li><NavLink href="/home" title="Home" /></li>
            <li><NavLink href="/bot" title="Chatterbot" /></li>
            <li><NavLink href="/about" title="About" /></li>
        </ul>
        <div>
            <a href='/' className='btn'>Log out</a>
        </div>
    </nav>
  )
}