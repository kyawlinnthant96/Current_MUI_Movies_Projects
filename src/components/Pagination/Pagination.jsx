import styled from "@emotion/styled";
import { Stack, Typography, Button } from "@mui/material";
import React from "react";

// style
import "./styles.css";
import { hooks } from "./hooks";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
}));

const Pagination = (props) => {
  const [setPage, totalPage, currentPage, handleNext, handlePrev] =
    hooks(props);
  return (
    <Stack
      direction="row"
      width={20}
      marginX="auto"
      alignItems="center"
      gap={2}
      marginY={1.5}
    >
      <StyledButton
        onClick={handlePrev}
        aria-label="navigate to previous page"
        disabled={currentPage === 1}
      >
        prev
      </StyledButton>
      <Typography sx={{ mx: "5px" }} variant="h6" component="div">
        {currentPage}
      </Typography>
      <StyledButton
        onClick={handleNext}
        aria-label="navigate to next page"
        disabled={currentPage === totalPage}
      >
        next
      </StyledButton>
    </Stack>
  );
};

export default Pagination;
