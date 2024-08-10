const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDcyZDg3OTY0MTBjMWQ4N2EyOTJiNTQwYTBmNzIwOCIsIm5iZiI6MTcyMjMzOTYzMy4zNzY1NzksInN1YiI6IjY2YThjOTUwZTc2NjZhZDU3YjVmYmI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._RDM3GQhrzgY2FojIaKW4YWMg1CcrT7HCdMO8eSeyy4",
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
