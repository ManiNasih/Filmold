const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

export async function fetchMovieVideos(id) {
  const apiVideosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

  const res = await fetch(apiVideosUrl, options);
  const data = await res.json();
  return data.results;
}
