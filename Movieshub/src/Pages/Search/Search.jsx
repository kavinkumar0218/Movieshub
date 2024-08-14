import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmNiYmZmODcwN2MwODExNjQ3YWE0MDRkNWQyZjdjZiIsIm5iZiI6MTcyMjgzNDUzNy4xMTQ0Miwic3ViIjoiNjZhYzU3YWQwMjQ1YTBlMWEwNDkwMWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WxGioeQfK6I8Gzm9yXS-LCxhyVTkzadqJ01lXB437vs",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data && data.results) {
        setMovies(data.results);
      } else {
        setError("No results found.");
      }
    } catch (err) {
      setError("An error occurred while fetching the data. Please try again.");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSearch}>
        <label htmlFor="search">
          <input
            required
            autoComplete="off"
            placeholder="Search your movies"
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="icon">
            <svg
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="swap-on"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <svg
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="swap-off"
            >
              <path
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <button
            type="reset"
            className="close-btn"
            onClick={() => setQuery("")}
          >
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </label>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>
                  <strong>Overview:</strong> {movie.overview}
                </p>
                <p>
                  <strong>Release Date:</strong>{" "}
                  {new Date(movie.release_date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Rating:</strong> {movie.vote_average} (
                  {movie.vote_count} votes)
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
