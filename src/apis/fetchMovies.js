const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  },
};

export async function fetchMovies({ pageParam }) {
  const searchParams = new URLSearchParams(window.location.search);

  const apiDicoverURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc`;

  if (searchParams.has("q")) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchParams.get(
        "q"
      )}&language=en-US&page=${pageParam}`,
      options
    );
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(apiDicoverURL, options);
    const data = await res.json();
    return data;
  }
}
