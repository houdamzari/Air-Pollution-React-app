import "./SingleCity.css";
import map from "../../assets/map.png";
function SingleCity({ children, handleClick, image }) {
  return (
    <div className="pill" onClick={handleClick}>
      {image && <img src={map} alt="map" className="map-picture" />}
      {children}
    </div>
  );
}

export default SingleCity;
