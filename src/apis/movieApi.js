const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

// eslint-disable-next-line no-unused-vars
export async function getMovies(title) {
  const apiDicoverURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const apiKeywordURL = `https://api.themoviedb.org/3/search/movie?query=${title}&language=en-US&page=1`;

  if (title) {
    const res = await fetch(apiKeywordURL, options);
    const data = await res.json();
    return data.results;
  } else {
    const res = await fetch(apiDicoverURL, options);
    const data = await res.json();
    return data.results;
  }
}
