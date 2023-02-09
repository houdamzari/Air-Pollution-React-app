import "./Search.css";
import { useEffect } from "react";
import search from "../../assets/search.svg";
import { useDispatch } from "react-redux";
import { searchCity } from "../../slices/citiesSlice";
function Search() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchCity(""));
  }, []);
  return (
    <div className="search">
      <input
        className="search-input"
        onChange={(e) => dispatch(searchCity(e.target.value))}
        type="text"
      />
      <img src={search} alt="icon" />
    </div>
  );
}

export default Search;
