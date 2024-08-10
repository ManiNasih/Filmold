const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDcyZDg3OTY0MTBjMWQ4N2EyOTJiNTQwYTBmNzIwOCIsIm5iZiI6MTcyMjMzOTYzMy4zNzY1NzksInN1YiI6IjY2YThjOTUwZTc2NjZhZDU3YjVmYmI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._RDM3GQhrzgY2FojIaKW4YWMg1CcrT7HCdMO8eSeyy4",
  },
};

export async function getRecommandedMovies(id) {
  const apiRecommandedMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;

  const res = await fetch(apiRecommandedMoviesUrl, options);
  const data = await res.json();
  return data.results;
}
