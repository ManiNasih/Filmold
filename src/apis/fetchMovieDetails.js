const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

export const fetchMovieDetails = async (id) => {
  const apiMovieDetails = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const res = await fetch(apiMovieDetails, options);
  const data = await res.json();

  return data;
};
