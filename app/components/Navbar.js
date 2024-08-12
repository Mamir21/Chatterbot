'use client'; 

import React from 'react';
import NavLink from './NavLink';
import '../navbar.css';
import { logOut } from '../services/auth';
import { useRouter } from 'next/navigation'; 

export default function Navbar() {
  const router = useRouter(); 

  const handleLogout = async () => {
    try {
      await logOut(); 
      router.push('/login'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return (
    <nav>
      <img src='/images/logo.png' className="logo" />
      <ul>
        <li><NavLink href="/home" title="Home" /></li>
        <li><NavLink href="/bot" title="Chatterbot" /></li>
      </ul>
      <div>
        <a className='btn' onClick={handleLogout}>Log out</a>
      </div>
    </nav>
  )
}
