import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { headerContext } from "./contexts/headerContext";
import { useState } from "react";
import Home from "./pages/Home";
import { useSearchParams } from "react-router-dom";
import FilmDetails from "./pages/FilmDetails";

export default function App() {
  const [searchTerm, setSearchTerm] = useState([]);
  // eslint-disable-next-line no-unused-vars, no-undef
  const [_, setSearchParams] = useSearchParams();

  function handleClick(e) {
    e.preventDefault();
    handleSearchTermParams("q", searchTerm);
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
        <Route index element={<Home />} />
        <Route path="details/:id" element={<FilmDetails />} />
      </Route>
    </Routes>
  );
}
