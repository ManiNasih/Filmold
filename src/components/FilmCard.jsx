import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const FilmCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie.id.toString()}`} reloadDocument>
      <div className="bg-primary-900 w-[219px] h-[328px] m-6 overflow-hidden border-none rounded-xl transition-all hover:scale-110 group relative sm:w-[164px] sm:h-[246px]">
        <div className="h-full w-full">
          <img
            className="w-full h-full object-cover relative transition-all group-hover:opacity-10 z-0"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <div className="absolute top-0 text-text-50 transition-all opacity-0 group-hover:opacity-100 w-full h-full flex items-center justify-center text-center flex-col gap-y-3">
            <p className="mt-2 max-w-[180px]">{movie.title}</p>
            <p>{movie.release_date}</p>
            <div className="flex gap-x-3 mb-3">
              <div className="bg-background-900 rounded-sm w-8 flex items-center justify-center px-3 py-[2px] flex-row">
                <p className="text-[14px] inline-block">
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
              <div className="bg-background-900 rounded-sm w-8 flex items-center justify-center px-3 py-[2px] flex-row">
                <p className="text-[14px] inline-block uppercase">
                  {movie.original_language}
                </p>
              </div>
            </div>

            <button className="border-white rounded-full border-2 items-center justify-center">
              <MdNavigateNext size={"30px"} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
