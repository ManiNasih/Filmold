import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovieVideos } from "../apis/fetchMovieVideos";

const Videos = () => {
  const { id } = useParams();

  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${id} videos`],
    queryFn: () => fetchMovieVideos(id),
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
      <h2 className="text-3xl font-semibold tracking-wide ">Videos</h2>
      <div className="flex ml-8 overflow-x-auto gap-x-5">
        {videos.map((video) => (
          <iframe
            className="aspect-video h-[250px] sm:h-[150px]"
            key={video.key}
            src={`https://www.youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
