// TitleCards.js
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'; // Import axios
import "./Titlecards.css";

const TitleCards = ({ title }) => {
  const [mongoData, setMongoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardsRef = useRef();

  useEffect(() => {
    axios.get('http://localhost:3000/videos/video')
      .then((response) => {
        setMongoData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching video data');
        setLoading(false);
        console.error('Error fetching video data:', err);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="title-card">
      <h2>{title ? title : "Video Library"}</h2>
      <div className="card-list" ref={cardsRef}>
        {mongoData.map((video, index) => (
          <div className="card" key={index}>
            <img
              src={video.image ? video.image : "http://localhost:3000/videos/video"}
              alt={video.title}
            />
            <p>{video.title ? video.title : ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
