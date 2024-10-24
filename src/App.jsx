import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useSearchParams } from "react-router-dom";
import FilmDetails from "./pages/FilmDetails";

export default function App() {
  // eslint-disable-next-line no-unused-vars, no-undef
  const [_] = useSearchParams();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<FilmDetails />} />
      </Route>
    </Routes>
  );
}
