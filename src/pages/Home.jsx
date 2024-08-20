import FilmCard from "../components/FilmCard";
import Hero from "../sections/Hero";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../apis/fetchMovies";

export default function Home() {
  const searchParams = new URLSearchParams(window.location.search);

  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", searchParams.get("q")],
    queryFn: fetchMovies,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-2xl font-semibold text-center text-text-50">
        Loading...
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-screen h-screen p-20 sm:px-6">
      <Hero />

      <div className="flex flex-wrap items-center justify-center w-full">
        {movies.map((movie) => (
          <FilmCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
