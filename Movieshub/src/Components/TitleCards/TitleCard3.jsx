// TitleCards3.js
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'; // Import axios
import "./Titlecards3.css";

const TitleCards3 = ({ title }) => {
  const [mongoData, setMongoData] = useState([]);
  const cardsRef = useRef();

  useEffect(() => {
    // Replace fetch with axios
    axios.get('http://localhost:3000/play/play')
      .then((response) => {
        setMongoData(response.data);
      })
      .catch((err) => {
        console.error('Error fetching play data:', err);
      });
  }, []);

  return (
    <div className="title-card-2">
      <h2>{title ? title : "Play Collection"}</h2>
      <div className="card-list-2" ref={cardsRef}>
        {mongoData.map((play, index) => (
          <div className="card-2" key={index}>
            <img
              src={play.image ? play.image : "http://localhost:3000/play/play"}
              alt={play.title}
            />
            <p>{play.title ? play.title : ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards3;
