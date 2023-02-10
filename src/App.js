import { Outlet, Routes, Route } from "react-router-dom";
import { Home, Details } from "./pages";
import { useEffect } from "react";
import { fetchCities } from "./redux/slices/citiesSlice";
import { useDispatch } from "react-redux";
import NavBar from "./components/Navbar/NavBar";
const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
