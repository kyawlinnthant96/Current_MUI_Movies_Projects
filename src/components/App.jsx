import React from "react";
// styles
import "./app.module.css";
import { CssBaseline, createTheme, styled, useTheme } from "@mui/material";
import { Actors, Movie, MovieInformation, Movies, Profile } from ".";
import { Route, Routes } from "react-router-dom";

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: "2em",
  [theme.breakpoints.down("md")]: {
    padding: "2em .5em",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "2em .25em",
  },
  height: "70px",
}));

const App = () => {
  return (
    <div className="app">
      <CssBaseline />
      {/* <Main> */}
      <Routes>
        <Route index element={<Movies />} />
        <Route path="movies/:id" element={<MovieInformation />} />
        <Route path="actors/:id" element={<Actors />} />
        <Route path="profile/:id" element={<Profile />} />
      </Routes>
      {/* </Main> */}
    </div>
  );
};

export default App;
