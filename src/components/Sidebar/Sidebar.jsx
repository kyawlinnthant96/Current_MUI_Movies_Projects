import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
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
} from "@mui/material";
import { BLUE_LOGO, NAV_LINKS } from "@constants";
import { useDispatch } from "react-redux";

import genreIcons from "../../assets/genres";

//redux
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Box>
      <AppBar
        color="default"
        position="static"
        sx={{ left: 0, height: "100vh", width: "fit-content" }}
      >
        <Box>
          <Stack divider={<Divider />}>
            <Box paddingX={4} paddingY={3}>
              <img src={BLUE_LOGO} width={160} />
            </Box>
            <Box>
              <ListSubheader>Categories</ListSubheader>
              {categories.map((category) => (
                <NavLink
                  onClick={() =>
                    dispatch(selectGenreOrCategory(category.value))
                  }
                  key={category.value}
                >
                  <ListItem>
                    <ListItemIcon>
                      <img
                        className="catImage"
                        src={genreIcons[category.label.toLowerCase()]}
                        alt="category logo"
                        height={30}
                      />
                    </ListItemIcon>
                    <ListItemText primary={category.label} />
                  </ListItem>
                </NavLink>
              ))}
            </Box>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Sidebar;
