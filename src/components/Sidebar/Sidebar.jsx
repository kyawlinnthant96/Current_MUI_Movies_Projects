import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
  ListItem,
  useTheme,
  List,
  CircularProgress,
} from "@mui/material";
import { BLUE_LOGO, NAV_LINKS } from "@constants";
import { useDispatch } from "react-redux";

import genreIcons from "../../assets/genres";
import "./styles.css";

//redux
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { RED_LOGO } from "@constants/index";
import { useQuery } from "react-query";
import { getGenre } from "../../services/tmdbApi";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const Sidebar = () => {
  const GenreData = useQuery({
    queryKey: ["genereData"],
    queryFn: getGenre,
  });

  const dispatch = useDispatch();
  const theme = useTheme();
  const linkStyle = {
    color: theme.palette.text.primary,
    textDecoration: "none",
  };
  const imageMode = {
    filter: theme.palette.mode === "dark" ? "invert(1)" : "",
  };
  // console.log(GenreData);
  const clickOnCategoryOrGenre = (value) => {
    // console.log(value);
    dispatch(selectGenreOrCategory(value));
  };
  return (
    <>
      <Link to="/" className="imageLink">
        <img
          className="image"
          src={theme.palette.mode === "light" ? BLUE_LOGO : RED_LOGO}
          alt="Main Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map((category) => (
          <Link key={category.value} style={linkStyle}>
            <ListItem
              onClick={() => clickOnCategoryOrGenre(category?.value)}
              button
            >
              <ListItemIcon>
                <img
                  style={imageMode}
                  src={genreIcons[category.label.toLowerCase()]}
                  alt="category logo"
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={category.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>
        {GenreData?.isLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          GenreData?.data?.data?.genres?.map(({ name, id }) => (
            <Link key={id} style={linkStyle} to="/">
              <ListItem onClick={() => clickOnCategoryOrGenre(id)}>
                <ListItemIcon>
                  <img
                    style={imageMode}
                    src={genreIcons[name.toLowerCase()]}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
