import { FeatureMovies, MovieList, Pagination } from "..";
import { Box, CircularProgress, Typography } from "@mui/material";
import hooks from "./hooks";

// style
import "./style.css";

const Movies = () => {
  const [page, setPage, MoviesQuery] = hooks();

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

  // console.log(MoviesQuery?.data?.data);
  return (
    <div style={{ margin: "4rem 0" }}>
      <FeatureMovies movie={MoviesQuery?.data?.data.results[0]} />
      <MovieList movies={MoviesQuery?.data?.data?.results} excludeFirst />
      <Pagination
        setPage={setPage}
        totalPage={MoviesQuery?.data?.data?.total_pages}
        currentPage={page}
      />
    </div>
  );
};

export default Movies;
