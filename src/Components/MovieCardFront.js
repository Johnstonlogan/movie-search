import React from "react";
import "../Styling/MovieFront.scss"

export const MovieCardFront = (props) => {
  return (
    
      <div className="movie-content">
        <div className="movie-card">
          <img src={props.currentMovie.Poster} alt={props.currentMovie.Title} />
        </div>

        <div>

        </div>
      </div>
 
  );
};
