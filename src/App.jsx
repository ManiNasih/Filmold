import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { headerContext } from "./contexts/headerContext";
import { useEffect, useState } from "react";
import { getMovies } from "./apis/movieApi";
import Home from "./pages/Home";
import { useSearchParams } from "react-router-dom";
import FilmDetails from "./pages/FilmDetails";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDcyZDg3OTY0MTBjMWQ4N2EyOTJiNTQwYTBmNzIwOCIsIm5iZiI6MTcyMjMzOTYzMy4zNzY1NzksInN1YiI6IjY2YThjOTUwZTc2NjZhZDU3YjVmYmI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._RDM3GQhrzgY2FojIaKW4YWMg1CcrT7HCdMO8eSeyy4",
  },
};

export default function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  // eslint-disable-next-line no-unused-vars, no-undef
  const [searchParams, setSearchParams] = useSearchParams();

  const getTrendingMovies = async () => {
    const trendingMoviesApiURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
    try {
      const response = await fetch(trendingMoviesApiURL, options);
      const data = await response.json();
      setTrendingMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  async function getMoviesApi() {
    const data = await getMovies();
    setMovies(data);
  }

  async function getSearchedMovies() {
    const data = await getMovies(searchParams.get("q"));
    setMovies(data);
  }

  useEffect(() => {
    getTrendingMovies();

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
      if (value === null) {
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
        <Route
          index
          element={<Home trendingMovies={trendingMovies} movies={movies} />}
        />
        <Route path="details/:id" element={<FilmDetails />} />
      </Route>
    </Routes>
  );
}
