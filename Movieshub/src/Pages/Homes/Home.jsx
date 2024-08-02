import React from "react";
import "./Homes.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret anient order, a young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt=""></img>Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt=""></img>More Info
            </button>
          </div>
          {/* <TitleCards /> */}
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category="top_rated" />
        <TitleCards title={"Only on netflix"} category="popular" />
        <TitleCards title={"upcoming"} category="upcoming" />
        <TitleCards title={"Top Pics for you"} category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
