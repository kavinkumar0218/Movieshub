import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Homes.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/bannerimg.jpg';
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

    return () => clearInterval(interval);
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
          <h1>Batman</h1>
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <Link to="/video" className='btn'>
              <img src={play_icon} alt="Play Icon" />Play
            </Link>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="Info Icon" />More Info
            </button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Continue playing" category="top_rated" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
