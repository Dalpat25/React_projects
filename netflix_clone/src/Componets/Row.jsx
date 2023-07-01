import React, { useEffect, useState, useRef } from "react";
import './row.css'
import axios from "../axios"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow})=>{
    const [movies , setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.table(request.data.results);
            return request;
        }fetchData();
    },[fetchUrl])
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay:1,
        },
      }

      const handleClick = (movie) => {
        if(trailerUrl){
          setTrailerUrl("");
        }else{
          movieTrailer(movie?.name || "")
          .then(url => {
            const urlParams = new URLSearchParams( new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
   
          }).catch(error => console.log(error))
        }
          };
    
          const rowRef = useRef(null);

          const scrollLeft = () => {
            if (rowRef.current) {
              rowRef.current.scrollBy({
                left: -200, // Adjust the scroll distance as per your needs
                behavior: 'smooth',
              });
            }
          };
        
          const scrollRight = () => {
            if (rowRef.current) {
              rowRef.current.scrollBy({
                left: 200, // Adjust the scroll distance as per your needs
                behavior: 'smooth',
              });
            }
          };

   return(
    <div className="row">
        <h2>{title }</h2>
        <div>
      <div className="scroll-buttonl" onClick={scrollLeft} >
      <FiChevronLeft />
      </div>
      <div className="row__posters" ref={rowRef}>
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      <div className="scroll-buttonr" onClick={scrollRight}>
      <FiChevronRight />
      </div>
    </div>
    {trailerUrl && window.open(`https://www.youtube.com/watch?v=${trailerUrl}`, '_blank')}
    </div>
   )
}

export default Row;