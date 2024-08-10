import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../apis/movieDetailsApi";
import { getMovieTrailers } from "../apis/movieTrailersApi";
import { getMovieVideos } from "../apis/movieVideos";
import { getSimilarMovies } from "../apis/similarApi";
import FilmCard from "../components/FilmCard";
import { getRecommandedMovies } from "../apis/recommendationApi";

const FilmDetails = () => {
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [details, setDetails] = useState();

  const [isTrailersLoading, setIsTrailersLoading] = useState(true);
  const [trailers, setTrailers] = useState();
  const [isTrailersError, setIsTrailersError] = useState(false);

  const [videos, setVideos] = useState();
  const [isVideosLoading, setIsVideosLoading] = useState(true);

  const [similarMovies, setSimilarMovies] = useState();
  const [isSimilarMoviesLoading, setIsSimilarMoviesLoading] = useState(true);

  const [recommandedMovies, setRecommandedMovies] = useState();
  const [isRecommandedMoviesLoading, setIsRecommandedMoviesLoading] =
    useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function loadMovieDetailsApi() {
      const data = await getMovieDetails(id);
      setDetails(data);

      setIsMoviesLoading(false);
    }

    async function loadMovieVideosApi() {
      const data = await getMovieVideos(id);
      setVideos(data);

      setIsVideosLoading(false);
    }

    async function loadSimilarMoviesApi() {
      const data = await getSimilarMovies(id);
      setSimilarMovies(data);

      setIsSimilarMoviesLoading(false);
    }

    async function loadRecommandedMoviesApi() {
      const data = await getRecommandedMovies(id);
      setRecommandedMovies(data);

      setIsRecommandedMoviesLoading(false);
    }

    loadMovieDetailsApi();
    loadMovieVideosApi();
    loadSimilarMoviesApi();
    loadRecommandedMoviesApi();
  }, []);

  useEffect(() => {
    async function loadMovieTrailers() {
      try {
        const data = await getMovieTrailers(details.title);
        setTrailers(data);
      } catch (error) {
        console.log(error);
        setIsTrailersError(true);
      }
      setIsTrailersLoading(false);
    }

    if (details) {
      loadMovieTrailers();
    }
  }, [details]);

  if (isMoviesLoading || isSimilarMoviesLoading || isRecommandedMoviesLoading) {
    return (
      <div className="text-text-50 text-2xl font-semibold w-screen h-screen flex justify-center items-center text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-24">
      <img
        className="w-[80vw] absolute left-0 right-0 -top-[100%] translateAbs mx-auto pointer-events-none blur-[300px] -z-10"
        draggable={false}
        src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
        alt=""
      />

      <div className="p-20">
        <div className="flex gap-x-7">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
              className="w-[250px] rounded-md object-contain"
            />
          </div>

          <div className="flex flex-col gap-y-10">
            <h1 className="font-bold text-3xl w-[400px]">{details.title}</h1>
            <div className="flex gap-x-2">
              {details.genres.map((genre) => (
                <div
                  className="bg-[#a3a3a3] bg-opacity-30 rounded p-2 text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="grid grid-rows-[repeat(3,_60px)_1fr] grid-cols-[130px_1fr] w-[700px] min-h-[300px]">
              <p className="font-medium">Release Date</p>
              <p>{details.release_date}</p>
              <p className="font-medium">Language</p>
              <p>{details.original_language.toUpperCase()}</p>
              <p className="font-medium">Status</p>
              <p>{details.status}</p>
              <p className="font-medium">Overview</p>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-14 mt-14">
          <div className="flex flex-col gap-y-8">
            <h2 className=" font-semibold text-3xl tracking-wide">Trailers</h2>
            <div className="flex overflow-x-auto gap-x-5 ml-8">
              {isTrailersLoading ? (
                <div>Loading...</div>
              ) : isTrailersError ? (
                <div>Failed to Fetch the Trailers</div>
              ) : (
                trailers.map((trailer) => (
                  <iframe
                    className="aspect-video h-[250px]"
                    key={trailer.id.videoId}
                    src={`https://www.youtube.com/embed/${trailer.id.videoId}`}
                    title="Deadpool &amp; Wolverine - Official Teaser Trailer (2024) Hugh Jackman, Ryan Reynolds"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ))
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            <h2 className=" font-semibold text-3xl tracking-wide">Videos</h2>
            <div className="flex overflow-x-auto gap-x-5 ml-8">
              {isVideosLoading ? (
                <div>Loading...</div>
              ) : videos.length ? (
                videos.map((video) => (
                  <iframe
                    className="aspect-video h-[250px]"
                    key={video.key}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Deadpool &amp; Wolverine - Official Teaser Trailer (2024) Hugh Jackman, Ryan Reynolds"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ))
              ) : (
                <div>None Were Found</div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            <h2 className=" font-semibold text-3xl tracking-wide">Similar</h2>
            <div className="flex overflow-x-auto gap-x-5 ml-8">
              {similarMovies.map((movie) => (
                <FilmCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            <h2 className=" font-semibold text-3xl tracking-wide">
              Recommedations
            </h2>
            <div className="flex overflow-x-auto gap-x-5 ml-8">
              {recommandedMovies.map((movie) => (
                <FilmCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
