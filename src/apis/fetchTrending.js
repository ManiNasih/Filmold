const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

export async function fetchTrending() {
  const trendingMoviesApiURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
  const response = await fetch(trendingMoviesApiURL, options);
  const data = await response.json();

  return data.results;
}
