export async function getMovieTrailers(name) {
  const apiTrailersURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    `${name} Official Trailer`
  )}&key=AIzaSyBxRAGg-7Y_Iaz5Idjzf8hqv73LWzpE0Rs&type=video`;

  const res = await fetch(apiTrailersURL);
  if (!res.ok) {
    throw {
      message: "Failed to fetch the Trailers",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return data.items;
}
