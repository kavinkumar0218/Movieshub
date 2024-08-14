import React, { useEffect, useRef, useState } from "react";
import "./Titlecard1.css";
import { Link } from "react-router-dom";

const TitleCard1 = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmNiYmZmODcwN2MwODExNjQ3YWE0MDRkNWQyZjdjZiIsIm5iZiI6MTcyMjgzNDUzNy4xMTQ0Miwic3ViIjoiNjZhYzU3YWQwMjQ1YTBlMWEwNDkwMWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WxGioeQfK6I8Gzm9yXS-LCxhyVTkzadqJ01lXB437vs'
    }
  };
  
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`, options)
    .then((response) => response.json())
    .then((response) => setApiData(response.results))
    .catch((err )=> console.error(err));
   
  }, []);

  
  return (
    <div className="title-card">
      <h2>{title ? title : "popular on Stream spot"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to ={`/player1/${card.id}`}className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
          
        })}
      </div>
    </div>
  );
};

export default TitleCard1;
