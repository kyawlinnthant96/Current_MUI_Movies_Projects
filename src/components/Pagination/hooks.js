import React from "react";

export function hooks({ setPage, totalPage, currentPage }) {
  if (totalPage === 0) {
    return null;
  }
  const handleNext = () => {
    setPage((prevPage) => (prevPage === totalPage ? prevPage : prevPage + 1));
  };
  const handlePrev = () => {
    setPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
  };
  return [setPage, totalPage, currentPage, handleNext, handlePrev];
}
