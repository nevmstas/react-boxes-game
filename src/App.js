import React from 'react';
import logo from './cloudLogo.png';
import './App.css';
import Header from './Header/Header.js'

const App = () => {
  return(
    <div className='app-wrapper'>
      <header className='header'>
          <div className="header-text">Tapbox.io</div>
      </header>
      <nav className='nav'>
        <img src={logo} alt="Logo"></img>
        <ul>
          <li><a href='#Game'>Game</a></li>
          <li><a href='#Rules'>Rules</a></li>
          <li style={{float:"right"}}><a className='about-btn' href='#About'>About</a></li>
        </ul>
      </nav>
      <div className='page-content'>
        <div className='game-field'>
          <div id="1">one</div>
          <div id="2">two</div>
          <div id="3">three</div>
          <div id="4">four</div>
          <div id="5">five</div>
          <div id="6">six</div>
          <div id="7">seven</div>
          <div id="8">eight</div>
          <div id="9">nine</div>
        </div>
      </div>
    </div>
  );
}

export default App;
