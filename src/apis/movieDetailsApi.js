const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

export async function getMovieDetails(id) {
  const apiDicoverURL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const res = await fetch(apiDicoverURL, options);
  const data = await res.json();
  return data;
}
