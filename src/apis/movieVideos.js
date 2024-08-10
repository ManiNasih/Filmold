const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDcyZDg3OTY0MTBjMWQ4N2EyOTJiNTQwYTBmNzIwOCIsIm5iZiI6MTcyMjMzOTYzMy4zNzY1NzksInN1YiI6IjY2YThjOTUwZTc2NjZhZDU3YjVmYmI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._RDM3GQhrzgY2FojIaKW4YWMg1CcrT7HCdMO8eSeyy4",
  },
};

export async function getMovieVideos(id) {
  const apiVideosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

  const res = await fetch(apiVideosUrl, options);
  const data = await res.json();
  return data.results;
}
