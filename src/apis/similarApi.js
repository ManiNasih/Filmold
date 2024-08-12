const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

export async function getSimilarMovies(id) {
  const apiSimilarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;

  const res = await fetch(apiSimilarMoviesUrl, options);
  const data = await res.json();
  return data.results;
}
