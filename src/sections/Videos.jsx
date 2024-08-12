const Videos = ({ videos, isVideosLoading }) => {
  return (
    <div className="flex flex-col gap-y-8">
      <h2 className=" font-semibold text-3xl tracking-wide">Videos</h2>
      <div className="flex overflow-x-auto gap-x-5 ml-8">
        {isVideosLoading ? (
          <div>Loading...</div>
        ) : videos.length ? (
          videos.map((video) => (
            <iframe
              className="aspect-video h-[250px] sm:h-[150px]"
              key={video.key}
              src={`https://www.youtube.com/embed/${video.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ))
        ) : (
          <div>None Were Found</div>
        )}
      </div>
    </div>
  );
};

export default Videos;
