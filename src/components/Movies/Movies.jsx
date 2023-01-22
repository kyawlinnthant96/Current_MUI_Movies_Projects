import React, { useState, useSyncExternalStore } from "react";

// style
import "./style.css";

import { FeatureMovies, MovieList, Pagination } from "..";
import Layout from "@components/Layout/Layout";
import { getMoviesByGenere } from "../../services/tmdbApi";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const MoviesQuery = useQuery({
    queryKey: ["movies", { genreIdOrCategoryName, page }],
    queryFn: () => getMoviesByGenere({ genreIdOrCategoryName, page }),
  });

  //** loading state */
  if (MoviesQuery.isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  //** error state */
  if (MoviesQuery.error) {
    return (
      <Typography variant="h1">{JSON.stringify(MoviesQuery.error)}</Typography>
    );
  }

  // console.log(MoviesQuery?.data?.data.results);
  return (
    <Layout>
      <FeatureMovies movie={MoviesQuery?.data?.data.results[0]} />
      <MovieList movies={MoviesQuery?.data?.data?.results} />
      <Pagination />
    </Layout>
  );
};

export default Movies;
