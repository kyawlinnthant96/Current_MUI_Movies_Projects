// styles
import "./style.css";
import { Grid, Grow, Rating, Tooltip, Typography, styled } from "@mui/material";

import { TMDB_IMAGE_PATH } from "@constants/index";
import { Link } from "react-router-dom";

const Movie = ({ movie, i }) => {
  const StyleLinked = styled(Link)(({ theme }) => ({
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  }));

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: "10px" }}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <StyleLinked to={`/movies/${movie?.id}`}>
          <img
            src={
              movie?.poster_path
                ? `${TMDB_IMAGE_PATH}/w500/${movie?.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={movie?.title}
            className="listImage"
          />
          <Typography className="movieTitle" variant="h5">
            {movie?.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie?.vote_average} / 10`}>
            <div>
              <Rating
                readOnly
                value={movie?.vote_average / 2}
                precision={0.1}
              />
            </div>
          </Tooltip>
        </StyleLinked>
      </Grow>
    </Grid>
  );
};

export default Movie;
