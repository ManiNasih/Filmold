import FilmCard from "../components/FilmCard";

const Similar = ({ similarMovies }) => {
  return (
    <div className="flex flex-col gap-y-8">
      <h2 className=" font-semibold text-3xl tracking-wide">Similar</h2>
      <div className="flex overflow-x-auto gap-x-5 ml-8">
        {similarMovies.map((movie) => (
          <FilmCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Similar;
