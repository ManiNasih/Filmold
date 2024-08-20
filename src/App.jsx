import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { headerContext } from "./contexts/headerContext";
import { useEffect, useState } from "react";
import { getMovies } from "./apis/movieApi";
import Home from "./pages/Home";
import { useSearchParams } from "react-router-dom";
import FilmDetails from "./pages/FilmDetails";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  // eslint-disable-next-line no-unused-vars, no-undef
  const [searchParams, setSearchParams] = useSearchParams();

  async function getMoviesApi() {
    const data = await getMovies();
    setMovies(data);
  }

  async function getSearchedMovies() {
    const data = await getMovies(searchParams.get("q"));
    setMovies(data);
  }

  useEffect(() => {
    if (searchParams.get("q")) getSearchedMovies();
    else getMoviesApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(e) {
    e.preventDefault();
    handleSearchTermParams("q", searchTerm);

    async function getSearchedMovies() {
      const data = await getMovies(searchParams.get("q"));
      setMovies(data);
    }

    if (searchParams.get("q")) getSearchedMovies();
    else getMoviesApi();
  }

  function handleSearchTermParams(key, value) {
    setSearchParams((prevParams) => {
      if (value === null || value === "") {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <headerContext.Provider
            value={{ searchTerm, setSearchTerm, handleClick }}
          >
            <Layout />
          </headerContext.Provider>
        }
      >
        <Route index element={<Home movies={movies} />} />
        <Route path="details/:id" element={<FilmDetails />} />
      </Route>
    </Routes>
  );
}
