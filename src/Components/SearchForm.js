import React, { useState } from "react";
import { YearSelect } from "./YearSelect";
import { getMovie } from "../Server";
import "../Styling/Search.scss";

export const SearchForm = (props) => {
  const [movie, setMovie] = useState("");
  const [year, setYear] = useState("");
  let payload = { movieName: movie, movieYear: year };
  const onSubmit = (e) => {
    getMovie(payload).then((res) => {
      if (res.data.movieNews.Response === "False") {
        props.movieSet({ Title: "Movie Not Found" });
      } else {
        props.movieSet(res.data.movieNews);
      }
    });
  };
  const validateForm = (e) => {
    e.preventDefault();
    if (movie === "") {
      alert("Movie name is required");
    } else {
      onSubmit();
    }
  };

  return (
    <div className="search">
      <form>
        <label>
          <span>Movie name:</span>
          <input
            className="search__input"
            name="movie"
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
          />
        </label>
        <label>
          Year:
          <YearSelect Inputclass="search__select" onSelect={setYear} />
        </label>
        <div className="search__button__group">
          <input
            className="search__button"
            type="submit"
            value="Search"
            onClick={(e) => validateForm(e)}
          />
          <input
            className="search__button"
            type="submit"
            value="Clear"
            onClick={() => props.clearMovie()}
          />
        </div>
      </form>
    </div>
  );
};
