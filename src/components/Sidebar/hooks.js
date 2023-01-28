import { useQuery } from "react-query";

import { getGenre, getMoviesByGenere } from "../../services/tmdbApi";

export function Hook() {
  const GenreData = useQuery({
    queryKey: ["genreData"],
    queryFn: getGenre(),
  });
  return [GenreData];
}
