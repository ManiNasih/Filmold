import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = ({ movie }) => {
  return (
    <div className="flex flex-col gap-y-6 overflow-x-clip">
      <h1 className="text-text-50 flex items-center text-center gap-x-2 font-medium tracking-wide text-2xl sm:text-lg sm:gap-x-0">
        Trending <BsFire color="red" className="w-[28px] aspect-square" />
      </h1>
      <Link to={`details/${movie.id.toString()}`}>
        <div className="z-10 flex items-center relative w-[85vw] min-h-[200px] aspect-video">
          <div className=" w-full h-full z-[6] bg-gradient-to-r from-background-950 to-transparent to-50% absolute"></div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            className="w-full h-full object-cover absolute pointer-events-none rounded-3xl opacity-40 z-[5]"
            draggable="false"
          />

          <div className="p-7 text-text-50 z-[7] flex flex-col gap-4">
            <h1 className="font-semibold text-5xl max-w-[35%] sm:text-lg">
              {movie.original_title}
            </h1>
            <div className="flex gap-x-3">
              <p className="inline-block sm:text-[10px]">
                {movie.release_date}
              </p>
              <div className="bg-background-900 rounded-sm flex items-center justify-center px-2 py-[2px] sm:text-[8px]">
                {movie.vote_average.toFixed(1)}
              </div>
            </div>

            <p className="sm:text-[8px]">{movie.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
