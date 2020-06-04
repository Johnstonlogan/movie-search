import React, { useState } from "react";
import { SearchForm } from "./Components/SearchForm";
import { MovieInfo } from "./Components/MovieInfo";
import "./App.scss";

function App() {
  const [movie, setMovie] = useState({});
  const isEmpty = (obj) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  };
  const clearMovie = () => {
    setMovie({});
  };
  return (
    <div className="App">
      <SearchForm movieSet={setMovie} />
      {!isEmpty(movie) ? (
        <div className="movie-container">
        <MovieInfo currentMovie={movie} clearMovie={clearMovie} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
