import FilmCard from "../components/FilmCard";

const Recommendations = ({ recommandedMovies }) => {
  return (
    <div className="flex flex-col gap-y-8">
      <h2 className=" font-semibold text-3xl tracking-wide">Recommedations</h2>
      <div className="flex overflow-x-auto gap-x-5 ml-8">
        {recommandedMovies.map((movie) => (
          <FilmCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
