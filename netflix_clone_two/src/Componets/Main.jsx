import axios from 'axios';
import '../App.css';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="main-container">
      <div className="main-gradient-overlay"></div>
      <img
        className="main-image"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="main-content">
        <h1 className="main-title">{movie?.title}</h1>
        <div className="my-4">
          <button className="main-button">Play</button>
          <button className="main-button">Watch Later</button>
        </div>
        <p className="main-date">Released: {movie?.release_date}</p>
        <p className="main-overview">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
  
};

export default Main;