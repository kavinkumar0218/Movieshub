// TitleCards4.js
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'; // Import axios
import "./Titlecards3.css";

const TitleCards4 = ({ title }) => {
  const [mongoData, setMongoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardsRef = useRef();

  useEffect(() => {
    // Fetch data using axios
    axios.get('http://localhost:3000/read/read')
      .then((response) => {
        setMongoData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching read data');
        setLoading(false);
        console.error('Error fetching read data:', err);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="title-card-2">
      <h2>{title ? title : "Read Collection"}</h2>
      <div className="card-list-2" ref={cardsRef}>
        {mongoData.map((read, index) => (
          <div className="card-2" key={index}>
            <img
              src={read.image ? read.image : 'http://localhost:3000/read/read'}
              alt={read.title}
            />
            <p>{read.title ? read.title : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards4;
