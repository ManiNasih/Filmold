const Trailers = ({ trailers, isTrailersLoading, isTrailersError }) => {
  return (
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
  );
};

export default Trailers;
