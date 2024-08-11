const DetailsHero = ({ details }) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default DetailsHero;
