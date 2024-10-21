import FilmCard from "../components/FilmCard";
import Hero from "../sections/Hero";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "../apis/fetchMovies";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home() {
  const searchParams = new URLSearchParams(window.location.search);

  const { data, status, error, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["movies", searchParams.get("q")],
      queryFn: fetchMovies,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return null;
      },
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === "pending") {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-2xl font-semibold text-center text-text-50">
        Loading...
      </div>
    );
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  const movies = data?.pages.map((page) => (
    <div
      key={page.page}
      className="flex flex-wrap items-center justify-center w-full"
    >
      {page.results.map((movie) => (
        <FilmCard movie={movie} key={movie.id} />
      ))}
    </div>
  ));

  return (
    <div className="w-screen h-screen p-20 sm:px-6">
      <Hero />
      {movies}
      <div
        ref={ref}
        className="p-4 text-4xl font-bold text-center text-text-50"
      >
        {isFetchingNextPage && "Loading..."}
      </div>
    </div>
  );
}
