import React, { useState } from "react";

// style
import "./style.css";
import { FeatureMovies, MovieList, Pagination } from "..";

const Movies = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <FeatureMovies />
      <MovieList />
      <Pagination />
    </div>
  );
};

export default Movies;
