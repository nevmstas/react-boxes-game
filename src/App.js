import React from 'react';

import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Game from './Components/Game/Game';
import Footer from './Components/Footer';



const App = () => {
  return(
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='page-content'>
        <Game />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
