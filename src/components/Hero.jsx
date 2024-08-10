import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = ({ movie }) => {
  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-text-50 flex items-center text-center gap-x-2 font-medium tracking-wide text-2xl ">
        Trending <BsFire color="red" size={"28px"} />
      </h1>
      <Link to={`${movie.id.toString()}`}>
        <div className="flex justify-center">
          <div className="min-h-[600px] h-[90vh] max-h-[900px] aspect-video overflow-hidden rounded-t-none rounded-b-3xl">
            <div className="h-full flex justify-center items-center">
              <div className="z-10 flex items-center relative h-full w-full">
                <div className=" w-full h-full z-[6] bg-gradient-to-r from-background-950 to-transparent to-50% absolute"></div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  className="w-full h-full object-cover absolute pointer-events-none rounded-3xl opacity-40 z-[5]"
                  draggable="false"
                />

                <div className="p-7 text-text-50 z-[7] flex flex-col gap-4">
                  <h1 className="font-semibold text-5xl max-w-[400px]">
                    {movie.original_title}
                  </h1>
                  <div className="flex gap-x-3">
                    <p className="inline-block">{movie.release_date}</p>
                    <div className="bg-background-900 rounded-sm w-8 flex items-center justify-center px-3 py-[2px]">
                      <p className="text-[14px] inline-block">
                        {movie.vote_average.toFixed(1)}
                      </p>
                    </div>
                  </div>
                  <p></p>
                  <p className="max-w-[600px]">{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
