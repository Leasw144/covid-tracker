import React from 'react';
import './Header.css';
import virus from '../assets/virus.svg';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='horz-holder'>
        <h1 className='title'>CoVid-Tracker</h1>
        <Link to='/'>
          <img className='logo' src={virus} alt='virus'/>
        </Link>
      </div>
    </header>
  )
}

export default Header;