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
      props.movieSet(res.data.movieNews);
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
    <div className="search-container">
      <form>
        <legend>Movie Search</legend>
        <label>
          <span>
            Movie name: <i>* required</i>
          </span>
          <input
            name="movie"
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
          />
        </label>
        <label>
          Year:
          <YearSelect onSelect={setYear} />
        </label>
        <input
          className="search"
          type="submit"
          value="Search"
          onClick={(e) => validateForm(e)}
        />
      </form>
    </div>
  );
};
