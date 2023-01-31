import React from "react";
// styles
import "./style.css";
import { Grid, Grow, styled } from "@mui/material";

const Movie = ({ movie, i }) => {
  // console.log(movie, i);
  const MovieGridContainer = styled(Grid)(({ theme }) => ({}));

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: "10px" }}>
      {/* <Grow in key={i} timeout={(i + 1) * 250}></Grow> */}
      {movie.title}
    </Grid>
  );
};

export default Movie;
