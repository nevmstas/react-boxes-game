import React from 'react'
import logo from '../cloudLogo.png';

const Navbar = () => {
    return(
      <nav className='nav'>
        <img src={logo} alt="Logo"></img>
        <ul>
          <li><a href='#Game'>Game</a></li>
          <li><a href='#Rules'>Rules</a></li>
          <li className='about-btn'><a className='about-btn' href='#About'>About</a></li>
        </ul>
      </nav>
    )
}

export default Navbar