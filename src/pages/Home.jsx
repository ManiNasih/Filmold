import FilmCard from "../components/FilmCard";
import Hero from "../sections/Hero";

export default function Home({ trendingMovies, movies }) {
  return (
    <div className="w-screen h-screen p-20">
      {trendingMovies.length > 0 ? (
        <Hero movie={trendingMovies[0]} />
      ) : (
        <div className="text-text-50 text-2xl font-medium tracking-wide">
          Loading
        </div>
      )}

      <div className="w-full flex justify-center items-center flex-wrap">
        {movies.length > 0 ? (
          movies.map((movie) => <FilmCard movie={movie} key={movie.id} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
