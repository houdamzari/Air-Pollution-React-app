import "./Search.css";
import { useEffect } from "react";
import search from "../../assets/search.svg";
import { useDispatch } from "react-redux";
import { searchCity } from "../../redux/slices/citiesSlice";

function Search() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchCity(""));
  }, [dispatch]);
  return (
    <div className="search">
      <input
        data-testid="search-input"
        className="search-input"
        onChange={(e) => dispatch(searchCity(e.target.value))}
        type="text"
      />
      <img data-testid="search-icon" src={search} alt="icon" />
    </div>
  );
}

export default Search;
