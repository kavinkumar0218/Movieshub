import React, { useEffect, useRef, useState } from "react";
import axios from "axios"; // Import axios
import "./Titlecards.css";

const TitleCards2 = ({ title }) => {
  const [mongoData, setMongoData] = useState([]);
  const cardsRef = useRef();

  useEffect(() => {
    // Replace fetch with axios
    axios
      .get("http://localhost:3000/images/image")
      .then((response) => {
        setMongoData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching image data:", err);
      });
  }, []);

  return (
    <div className="title-card">
      <h2>{title ? title : "Image Library"}</h2>
      <div className="card-list" ref={cardsRef}>
        {mongoData.map((image, index) => (
          <div className="card" key={index}>
            <img
              src={
                image.image ? image.image : "http://localhost:3000/images/image"
              }
              alt={image.title}
            />
            <p>{image.title ? image.title : ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards2;
