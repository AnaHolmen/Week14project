import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => (
  <div>
    {movies.map((movie) => (
      <Movie key={movie.id} {...movie} />
    ))}
  </div>
);

export default MovieList;
