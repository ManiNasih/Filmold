import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../apis/fetchMovieDetails";
import { useParams } from "react-router-dom";

const DetailsHero = () => {
  const { id } = useParams();

  const {
    data: details,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${id} hero`],
    queryFn: () => fetchMovieDetails(id),
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
    <>
      <img
        className="w-[80vw] absolute left-0 right-0 -top-[100%] translateAbs mx-auto pointer-events-none blur-[300px] -z-10 lg:w-screen lg:-top-[50%] sm:top-0"
        draggable={false}
        src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
        alt=""
      />

      <div className="flex w-full pt-20 gap-x-7 lg:flex-col lg:items-start lg:gap-y-10 lg:pt-5 sm:pt-2">
        <div className="w-[250px] flex shrink-0 items-start justify-start lg:w-full">
          <img
            src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
            className="object-contain w-full rounded-md lg:hidden"
          />
          <img
            src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
            className="hidden object-contain w-full rounded-md lg:block"
          />
        </div>

        <div className="flex flex-col shrink">
          <h1 className="font-bold text-3xl max-w-[400px] mb-10">
            {details.title}
          </h1>
          <div className="flex flex-wrap mb-10 gap-x-2">
            {details.genres.map((genre) => (
              <div
                className="bg-[#a3a3a3] bg-opacity-30 rounded p-2 text-sm"
                key={genre.id}
              >
                {genre.name}
              </div>
            ))}
          </div>
          <div className="grid grid-rows-[repeat(3,_60px)] grid-cols-[130px_1fr] max-w-[700px]">
            <p className="font-medium">Release Date</p>
            <p>{details.release_date}</p>
            <p className="font-medium">Language</p>
            <p>{details.original_language.toUpperCase()}</p>
            <p className="font-medium">Status</p>
            <p>{details.status}</p>
          </div>

          <div className="grid grid-rows-1 grid-cols-[130px_1fr] max-w-[700px] sm:grid-cols-none sm:grid-rows-[70px_1fr] sm:place-items-center">
            <p className="font-medium">Overview</p>
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsHero;
