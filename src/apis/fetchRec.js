const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

export async function fetchRec(id) {
  const apiRecommandedMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;

  const res = await fetch(apiRecommandedMoviesUrl, options);
  const data = await res.json();
  return data.results;
}
