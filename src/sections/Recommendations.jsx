import { useQuery } from "@tanstack/react-query";
import FilmCard from "../components/FilmCard";
import { fetchRec } from "../apis/fetchRec";
import { useParams } from "react-router-dom";

const Recommendations = () => {
  const { id } = useParams();
  const {
    data: recommandedMovies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${id} rec`],
    queryFn: () => fetchRec(id),
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
    <div className="flex flex-col gap-y-8">
      <h2 className="text-3xl font-semibold tracking-wide ">
        You May Also Like
      </h2>
      <div className="flex ml-8 overflow-x-auto gap-x-5">
        {recommandedMovies.map((movie) => (
          <FilmCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
