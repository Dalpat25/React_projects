import axios from 'axios';
import '../App.css';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <MdChevronLeft
          onClick={slideLeft}
          className="row-chevron row-chevron-left"
          size={40}
        />
        <div id={`slider${rowID}`} className="row-slider">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="row-chevron row-chevron-right"
          size={40}
        />
      </div>
    </>
  );
  
};

export default Row;