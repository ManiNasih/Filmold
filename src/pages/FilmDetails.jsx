import DetailsHero from "../sections/DetailsHero";
import Videos from "../sections/Videos";
import Recommendations from "../sections/Recommendations";
import { useNavigate } from "react-router-dom";

const FilmDetails = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  return (
    <div className="py-24 px-36 xl:px-16 md:px-10 sm:px-6">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <DetailsHero />

      <div className="flex flex-col gap-y-14 mt-14">
        <Videos />

        <Recommendations />
      </div>
    </div>
  );
};

export default FilmDetails;
