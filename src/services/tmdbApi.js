import axios from "axios";
import { TMDB_API_BASE_URL, TMDB_IMAGE_PATH } from "../constants";

const instance = axios.create({ baseURL: TMDB_API_BASE_URL });
const imgBaseUrl = axios.create({ baseURL: TMDB_IMAGE_PATH });
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchBanner: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const getBannerData = async () => {
  const response = await instance.get(requests.fetchBanner);
  return response;
};
const getTopRated = async () => {
  const response = await instance.get(requests.fetchTopRated);
  return response;
};
const getTrending = async () => {
  const response = await instance.get(requests.fetchTrending);
  return response;
};
const getDocumentary = async () => {
  const response = await instance.get(requests.fetchDocumentaries);
  return response;
};

const getMovieDetail = async (id) => {
  const response = await instance.get(
    `/movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}&language=en-US`
  );
  return response;
};

const getActor = async (castId) => {
  const response = await instance.get(`person/${castId}?api_key=${API_KEY}`);
  return response;
};

const getMovieByActor = async ({ id, page }) => {
  const response = await instance.get(
    `discover/movie?with_cast=${id}&page=${page}&api_key=${API_KEY}`
  );
  return response;
};

const searchMovie = async ({ searchQuery, page }) => {
  const response = await instance.get(
    `/search/movie?query=${searchQuery}&page=${page}&api_key=${API_KEY}&language=en-US`
  );
  return response;
};

const getMoviesByGenere = ({ genreIdOrCategoryName, page }) => {
  let response = instance.get(
    `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${API_KEY}`
  );
  return response;
};
const getMoviesByCat = ({ genreIdOrCategoryName, page }) => {
  let response = instance.get(
    `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${API_KEY}`
  );
  return response;
};

/*  if (genereIdOrCategory && typeof genereIdOrCategory === "string") {
    return (response = instance.get(
      `movie/${genreIdOrCategoryName}?page=${page}&api_key=${API_KEY}`
    ));
  } */

export {
  getBannerData,
  getTopRated,
  getTrending,
  getDocumentary,
  getMovieDetail,
  getMovieByActor,
  getActor,
  searchMovie,
  getMoviesByCat,
  getMoviesByGenere,
};
