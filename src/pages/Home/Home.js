
import './Home.css';
import NavBar from '../../componenets/NavBar';
import React from 'react';
import TopBar from '../../componenets/TopBar';

const Home=()=> {
  return (
    <div className='home'>
      <NavBar />
      <div className='homeContainer'>
         <TopBar /> 
         <hr/>
         
      </div>
      
      
    </div>
  );
}

export default Home;
