import { useSelector, useDispatch } from "react-redux";
import { Grid, Container, SingleCity, Search } from "../components";
import { useNavigate } from "react-router-dom";
import { fetchAirPollution } from "../redux/slices/airPolutionSlice";
function Home() {
  const { cities, filteredCities, searchString } = useSelector(
    (state) => state.cities
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayCities = searchString ? filteredCities : cities;

  const handleClick = (location, city) => {
    dispatch(fetchAirPollution(location));
    setTimeout(() => {
      navigate(`/${city.name}`);
    }, 500);
  };
  return (
    <Container>
      <Search />
      <div className="heading">
        <h2>STATS BY CITY</h2>
      </div>
      <Grid>
        {displayCities.map((city) => (
          <SingleCity
            handleClick={() =>
              handleClick({ lat: city.latitude, lon: city.longitude }, city)
            }
            image
            key={city.name}
          >
            <p>{"City Name: " + city.name}</p>
            <p> {"Population: " + city.population}</p>
          </SingleCity>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
