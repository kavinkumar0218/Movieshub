import React from 'react';
import TitleCards from "../Components/TitleCards/TitleCards";
import Navbar from '../Components/Navbar/Navbar';
import './Blockbuster.css';

const Blockbuster = () => {
  return (
    <div className='imovies'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='movies-container'>
        <TitleCards title={"Blockbuster Movies"} category="top_rated" />
        <TitleCards title={"Only on Stream spot "} category="popular" />
        <TitleCards title={"upcoming"} category="upcoming" />
        <TitleCards title={"Top Pics for you"} category="now_playing" />
      </div>

    </div>
  );
}

export default Blockbuster;