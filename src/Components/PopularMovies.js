import React from "react";
import { getMovie } from "../Server";
import "../Styling/PopularMovies.scss";

export const PopularMovies = (props) => {
  props.popMovies.length = 10;

  const onSubmit = (title) => {
    let payload = { movieName: title, movieYear: null };
    getMovie(payload).then((res) => {
      if (res.data.movieNews.Response === "False") {
        props.setMovie({ Title: "Movie Not Found" });
      } else {
        props.setMovie(res.data.movieNews);
      }
    });
  };
  return (
    <div className="popular-movies">
      <h3>Popular Movies</h3>

      <ol>
        {props.popMovies.map((movie, i) => {
          return (
            <li onClick={() => onSubmit(movie.title)} key={i}>
              {movie.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
