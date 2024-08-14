import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import './Blockbuster1.css';
import TitleCard1 from '../Titlecard1/Titlecard1';

const Blockbuster1 = () => {
  return (
    <div className="imovies1">
      <div className="navbar-container1">
        <Navbar />
      </div>
      <div className="movies-container1">
        <TitleCard1 title={"Blockbuster Shows"} category="airing_today" />
        <TitleCard1 title={"Only on Stream spot"} category="on_the_air" />
        <TitleCard1 title={"Upcoming"} category="popular" />
        <TitleCard1 title={"Top Picks for you"} category="top_rated" />
      </div>
    </div>
  );
}

export default Blockbuster1;
