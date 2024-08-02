import React, { useEffect, useRef, useState } from "react";
import "./Titlecards.css";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmNiYmZmODcwN2MwODExNjQ3YWE0MDRkNWQyZjdjZiIsIm5iZiI6MTcyMjU3MTEyMy41MjE1Miwic3ViIjoiNjZhYzU3YWQwMjQ1YTBlMWEwNDkwMWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.x97jD1TcP8ZTg5LJjdeQ5Xc61c_YYc0UTlWqFOWj-OQ",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmNiYmZmODcwN2MwODExNjQ3YWE0MDRkNWQyZjdjZiIsIm5iZiI6MTcyMjU3MTEyMy41MjE1Miwic3ViIjoiNjZhYzU3YWQwMjQ1YTBlMWEwNDkwMWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.x97jD1TcP8ZTg5LJjdeQ5Xc61c_YYc0UTlWqFOWj-OQ",
  //   },
  // };

  // const handlewheel = (event) => {
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft += event.deltaY;
  // };
  // useEffect(() => {
  //   fetch(
  //     'https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1',
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));

  //   cardsRef.current.addEventListener("wheel", handlewheel);
  // }, []);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmNiYmZmODcwN2MwODExNjQ3YWE0MDRkNWQyZjdjZiIsIm5iZiI6MTcyMjU3MTEyMy41MjE1Miwic3ViIjoiNjZhYzU3YWQwMjQ1YTBlMWEwNDkwMWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.x97jD1TcP8ZTg5LJjdeQ5Xc61c_YYc0UTlWqFOWj-OQ",
  //   },
  // };

  // fetch(
  //   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response.results))
  //   .catch((err) => console.error(err));
  return (
    <div className="title-card">
      <h2>{title ? title : "popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </div>
          );
          // console.log(card.original_title);
        })}
      </div>
    </div>
  );
};

export default TitleCards;
