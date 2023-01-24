import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { positions, styled } from "@mui/system";
import { Box, Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { TMDB_IMAGE_PATH } from "@constants/index";

const FeatureMovies = ({ movie }) => {
  const theme = useTheme();
  const cardContent = styled("div")(({ theme }) => ({}));

  const cardRoot = {
    position: "relative",
  };
  if (!movie) return null;
  return (
    <Box
      component={Link}
      to={`movies/${movie.id}`}
      className="feature-container"
    >
      <Card className="feature-card" classes={{ root: cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie?.title}
          image={`${TMDB_IMAGE_PATH}/original/${movie?.backdrop_path}`}
          title={movie?.title}
          className="feature-card--media"
        />
      </Card>
    </Box>
  );
};

export default FeatureMovies;
