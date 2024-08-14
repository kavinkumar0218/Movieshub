import React from 'react';
import './Player1.css';
import icon from '../assets/icon1.jpg';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmNiYmZmODcwN2MwODExNjQ3YWE0MDRkNWQyZjdjZiIsIm5iZiI6MTcyMjgzNDUzNy4xMTQ0Miwic3ViIjoiNjZhYzU3YWQwMjQ1YTBlMWEwNDkwMWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WxGioeQfK6I8Gzm9yXS-LCxhyVTkzadqJ01lXB437vs'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
       options
      )
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='player1'>
      <img src={icon} 
      alt="" 
      onClick={() => {
        navigate(-2)}} 
        
        />
      <iframe
        width='90%'
        height='90%'
        src={`http://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player1-info">
        <p>{apiData. apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player1;
