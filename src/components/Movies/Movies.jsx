import React, { useState } from "react";

// style
import "./style.css";

import { FeatureMovies, MovieList, Pagination } from "..";
import Layout from "@components/Layout/Layout"

const Movies = () => {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      Hoem
      <FeatureMovies />
      <MovieList />
      <Pagination />
    </Layout>
  );
};

export default Movies;
