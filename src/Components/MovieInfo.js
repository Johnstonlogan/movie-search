import React from "react";
import "../Styling/MovieInfo.scss";
import { MovieCardBack } from "./MovieCardBack";

export const MovieInfo = (props) => {
  return (
    <div className="movie">
      <MovieCardBack {...props} />
    </div>
  );
};
