import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../apis/movieDetailsApi";
import { getMovieTrailers } from "../apis/movieTrailersApi";
import { getMovieVideos } from "../apis/movieVideos";
import { getSimilarMovies } from "../apis/similarApi";
import { getRecommandedMovies } from "../apis/recommendationApi";
import DetailsHero from "../sections/DetailsHero";
import Trailers from "../sections/Trailers";
import Videos from "../sections/Videos";
import Similar from "../sections/Similar";
import Recommendations from "../sections/Recommendations";

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
  }, [id]);

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
    <div className="px-36 py-24 xl:px-16 md:px-10 sm:px-6">
      <DetailsHero details={details} />

      <div className="flex flex-col gap-y-14 mt-14">
        <Trailers
          trailers={trailers}
          isTrailersLoading={isTrailersLoading}
          isTrailersError={isTrailersError}
        />

        <Videos videos={videos} isVideosLoading={isVideosLoading} />

        <Similar similarMovies={similarMovies} />

        <Recommendations recommandedMovies={recommandedMovies} />
      </div>
    </div>
  );
};

export default FilmDetails;
