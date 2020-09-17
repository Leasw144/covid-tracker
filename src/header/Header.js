import React from 'react';
import './Header.css';
import virus from '../assets/virus.svg';

function Header() {
  return (
    <header>
      <div className='horz-holder'>
        <h1>CoVid-Tracker</h1>
        {/* <button  className='return-home-btn' type='button'>  */}
          <img className='logo' src={virus} alt='virus'/>
        {/* </button> */}
      </div>
    </header>
  )
}

export default Header;