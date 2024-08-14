import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/bmmu.jpg";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" className="logo" />
        <ul>
          <li onClick={() => navigate("/Home")}>Home</li>
          <li onClick={() => navigate("/Tvshows")}>Tvshows</li>
          <li onClick={() => navigate("/Movies")}>Movies</li>
          <li onClick={() => navigate("/Support")}>Support us</li>
          <li onClick={() => navigate("/Premium")}>Premium</li>
          <li onClick={() => navigate("/feedback")}>Feedback</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" onClick={handleSearchClick} />
        <span onClick={() => navigate("/")}></span>
        
        <div className="navbar-profile" onClick={toggleDropdown}>
          <img src={profile_img} alt="" className="profile" />
          <img
            src={caret_icon}
            alt=""
            className={`caret ${dropdownVisible ? "rotate" : ""}`}
          />
          {dropdownVisible && (
            <div className="dropdown">
              <p>
                <span onClick={() => navigate("/")}>Sign Out</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
