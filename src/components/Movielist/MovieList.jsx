import React from "react";

// styles
import "./style.css";
import { useParams } from "react-router-dom";
import { Grid, styled } from "@mui/material";
import { Movie } from "..";
import { NUMBER_OF_MOVIES } from "@constants/index";

const MovieList = ({ movies, excludeFirst }) => {
  const numberOfMovies = NUMBER_OF_MOVIES;
  const startFrom = excludeFirst ? 1 : 0;
  // console.log(movies);
  const GridContainer = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  return (
    <GridContainer container>
      {movies?.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </GridContainer>
  );
};

export default MovieList;
