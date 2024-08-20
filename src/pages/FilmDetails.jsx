import DetailsHero from "../sections/DetailsHero";
import Videos from "../sections/Videos";
import Recommendations from "../sections/Recommendations";
import { Link } from "react-router-dom";

const FilmDetails = () => {
  return (
    <div className="py-24 px-36 xl:px-16 md:px-10 sm:px-6">
      <Link to="../..">Back</Link>
      <DetailsHero />

      <div className="flex flex-col gap-y-14 mt-14">
        <Videos />

        <Recommendations />
      </div>
    </div>
  );
};

export default FilmDetails;
