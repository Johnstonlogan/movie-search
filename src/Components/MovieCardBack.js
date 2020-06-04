import React, { useState } from "react";
import "../Styling/MovieBack.scss";

export const MovieCardBack = (props) => {
  const movie = props.currentMovie;
  const [width, setWidth] = useState(window.innerWidth)
  React.useEffect(() =>{
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
  }, [])
 
  return (
    <div className="movie-back">
      <div className="movie-card">
        <h1>{movie.Title}</h1>
        <div className="movie-release-info">
          {width >= 768 ?
            <div className="movie-image">
            <img src={movie.Poster} alt={movie.Title}/>
            </div> : null
          }
          <div>
          <span className="bold">Released:</span>
          {movie.Released}
          </div>
          <div>
          <span className="bold">Director:</span>
          {movie.Director}
          </div>
          <div>
          <span className="bold">Actors:</span>
          {movie.Actors}
          </div>
          <div>
          <span className="bold">Awards:</span>
          {movie.Awards}
          </div>
          <div>
          <span className="bold">Genre:</span>
          {movie.Genre}
          </div>
          <div>
          <span className="bold">Rating:</span>
          {movie.Rated}
          </div>
          <div>
          <span className="bold">Runtime:</span>
          {movie.Runtime}
          </div>
          <div>
          <span className="bold">Plot:</span>
          {movie.Plot}
          </div>
          <div>
          <span className="bold">IMDB Rating:</span>
          {movie.imdbRating}/10
          </div>
        </div>
      </div>
    </div>
  );
};
