import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/bmmu.jpg';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt='' className='logo' />
        <ul>
          <li onClick={() => navigate('/Home')}>Home</li>
          <li>Tv shows</li>
          <li onClick={() => navigate('/Movies')}>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt='' className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt='' className='icons' />
        <div className="navbar-profile" onClick={toggleDropdown}>
          <img src={profile_img} alt='' className='profile' />
          <img src={caret_icon} alt='' className={`caret ${dropdownVisible ? 'rotate' : ''}`} />
          {dropdownVisible && (
            <div className="dropdown">
              <p><span onClick={() => navigate('/')}>Sign Out</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
