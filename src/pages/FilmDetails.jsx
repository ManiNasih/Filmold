import DetailsHero from "../sections/DetailsHero";
import Videos from "../sections/Videos";
import Recommendations from "../sections/Recommendations";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const FilmDetails = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  return (
    <div className="py-24 px-36 xl:px-16 md:px-10 sm:px-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center gap-x-2 bg-background-950 p-3 pr-5 rounded"
      >
        <IoIosArrowBack /> <p>Go back</p>
      </button>
      <DetailsHero />

      <div className="flex flex-col gap-y-14 mt-14">
        <Videos />

        <Recommendations />
      </div>
    </div>
  );
};

export default FilmDetails;
