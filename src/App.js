import React, { useState, useEffect } from "react";
import { SearchForm } from "./Components/SearchForm";
import { PopularMovies } from "./Components/PopularMovies";
import { MovieInfo } from "./Components/MovieInfo";
import { getPopularMovies } from "./Server";
import "./App.scss";

function App() {
  useEffect(() => {
    getPopularMovies().then((res) => {
      setPopMovies(res.data.popularMovies.results);
    });
  }, []);
  const [popMovies, setPopMovies] = useState([]);
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
    <div className="app">
      <section className="app__form">
        <SearchForm movieSet={setMovie} clearMovie={clearMovie} />
      </section>
      <section className="app__results">
        <PopularMovies popMovies={popMovies} setMovie={setMovie} />
        {!isEmpty(movie) ? (
          <MovieInfo currentMovie={movie} clearMovie={clearMovie} />
        ) : null}
      </section>
    </div>
  );
}

export default App;
