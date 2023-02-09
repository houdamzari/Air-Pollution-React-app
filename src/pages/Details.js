import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Grid, Container, Back, SingleCity } from "../components";
function Details() {
  const { polutionData } = useSelector((state) => state.airpolution);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    const keys = Object.keys(polutionData);
    setKeys(keys);
  }, [polutionData]);
  return (
    <Container>
      <Back />
      <Grid>
        {keys.map((key) => (
          <SingleCity key={key}>
            {key.toUpperCase() + ": " + polutionData[key]}
          </SingleCity>
        ))}
      </Grid>
    </Container>
  );
}

export default Details;
