import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { headerContext } from "../contexts/headerContext";
import { useContext } from "react";

const Header = () => {
  const { searchTerm, setSearchTerm, handleClick } = useContext(headerContext);

  return (
    <header className="text-text-100 flex justify-between px-32 items-center flex-row fixed top-0 left-0 w-full h-16 bg-background-950 border-b border-b-slate-400 z-50 sm:px-5 xl:px-16">
      <Link to="/" reloadDocument>
        <p className="text-3xl uppercase font-medium tracking-wide sm:text-lg">
          Filmold
        </p>
      </Link>
      <form className="relative w-[400px] h-8 overflow-hidden lg:w-[300px] sm:w-[200px]">
        <input
          type="text"
          className="w-full h-full text-black pr-12 pl-2 rounded-sm outline-none text-[15px]  sm:pl-1 sm:pr-9"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          type="submit"
          className="translateAbs absolute top-[14%] right-1 flex items-center justify-center bg-primary-900 w-[25px] h-[25px] rounded-sm"
          onClick={(e) => handleClick(e)}
        >
          <IoSearch size={"14px"} />
        </button>
      </form>
    </header>
  );
};

export default Header;
