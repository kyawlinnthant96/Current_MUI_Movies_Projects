import React from "react";
import "./FeatureComponents.js";

import { Link } from "react-router-dom";
import { TMDB_IMAGE_PATH } from "@constants/index";
import {
  FeatureCard,
  FeatureCardContainer,
  FeatureCardContent,
  FeatureMedia,
} from "./FeatureComponents";
import { Box, Typography } from "@mui/material";

const FeatureMovies = ({ movie }) => {
  if (!movie) return null;
  return (
    <FeatureCardContainer component={Link} to={`movies/${movie?.id}`}>
      <FeatureCard>
        <FeatureMedia
          media="picture"
          alt="movies"
          image={`${TMDB_IMAGE_PATH}/original/${movie?.backdrop_path}`}
          title={movie?.title}
        />
        <Box padding="20px">
          <FeatureCardContent>
            <Typography>Hello</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio qui
              sapiente quaerat. Neque, voluptatum quos ex aut error atque
              perferendis.
            </Typography>
          </FeatureCardContent>
        </Box>
      </FeatureCard>
    </FeatureCardContainer>
  );
};

export default FeatureMovies;
