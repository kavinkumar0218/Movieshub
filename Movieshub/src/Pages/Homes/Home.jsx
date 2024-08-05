import React, { useState, useEffect } from 'react';
import './Homes.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/bannerimg.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../Components/TitleCards/TitleCards';
import batman1 from '../../assets/batman6.jpg';
import batman from '../../assets/batman.jpg';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const slides = [batman, hero_banner, batman1];

  return (
    <div className='Home'>
      <Navbar />
      <div className="hero">
        <div className="hero-images">
          {slides.map((slide, index) => (
            <img
              key={index}
              className="mySlides"
              src={slide}
              style={{ display: index === myIndex ? 'block' : 'none' }}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        <div className="hero-caption">
          {/* <img src={hero_title} alt="Hero Title" className='caption-img' /> */}
          <h1>Batman</h1>
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="Play Icon" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="Info Icon" />More Info</button>
          </div>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category="top_rated" />
      <TitleCards title={"Only on Stream spot "} category="popular" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
