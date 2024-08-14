import React from 'react';
import TitleCards from "../Components/TitleCards/TitleCards";
import Navbar from '../Components/Navbar/Navbar';
import './Blockbuster.css';
import TitleCards2 from '../Components/TitleCards/TitleCards2';
import TitleCards3 from '../Components/TitleCards/TitleCard3';
import TitleCards4 from '../Components/TitleCards/TitleCards4';

const Blockbuster = () => {
  return (
    <div className='imovies'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='movies-container'>
        <TitleCards title={"Blockbuster Movies"} category="top_rated" />
        <TitleCards4 title={"Only on Stream spot "} category="popular" />
        <TitleCards3 title={"upcoming"} category="upcoming" />
        <TitleCards2 title={"Top Pics for you"} category="now_playing" />
      </div>

    </div>
  );
}

export default Blockbuster;