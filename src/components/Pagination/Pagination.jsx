import styled from "@emotion/styled";
import { Stack, Typography, Button } from "@mui/material";
import React from "react";

// style
import "./styles.css";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
}));

const Pagination = ({ currentPage, onPrevClick, onNextClick }) => {
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
        onClick={onPrevClick}
        aria-label="navigate to previous page"
        disabled={currentPage - 1 === 0}
      >
        prev
      </StyledButton>
      <Typography variant="h6" component="div">
        {currentPage}
      </Typography>
      <StyledButton onClick={onNextClick} aria-label="navigate to next page">
        next
      </StyledButton>
    </Stack>
  );
};

export default Pagination;
