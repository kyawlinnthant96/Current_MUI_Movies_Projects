import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getMoviesByGenere } from "../../services/tmdbApi";
import { useQuery } from "react-query";

export default function hooks() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const MoviesQuery = useQuery({
    queryKey: ["movies", { genreIdOrCategoryName, page }],
    queryFn: () => getMoviesByGenere({ genreIdOrCategoryName, page }),
  });

  return [page, setPage, MoviesQuery];
}
