import React, { useState } from "react";

// styles
import "./styles.css";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const SearchContainer = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  }));
  const InputWrapper = styled("div")(({ theme }) => ({
    color: theme.palette.mode === "light" && "black",
    filter: theme.palette.mode === "light" && "invert(1)",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10px",
      marginBottom: "10px",
    },
  }));

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== "/") return null;

  return (
    <SearchContainer>
      <div>
        <TextField
          onKeyDown={handleKeyDown}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputWrapper>
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              </InputWrapper>
            ),
          }}
        />
      </div>
    </SearchContainer>
  );
};

export default Search;
