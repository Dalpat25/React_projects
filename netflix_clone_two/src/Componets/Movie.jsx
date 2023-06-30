import React, { useState } from 'react';
import '../App.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div className="movie-container">
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="movie-overlay">
        <p className="movie-title">{item?.title}</p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="movie-like-icon" />
          ) : (
            <FaRegHeart className="movie-like-icon" />
          )}
        </p>
      </div>
    </div>
  );  
};

export default Movie;