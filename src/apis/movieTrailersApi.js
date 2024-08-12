export async function getMovieTrailers(name) {
  const apiTrailersURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    `${name} Official Trailer`
  )}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&type=video`;

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
