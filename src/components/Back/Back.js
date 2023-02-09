import "./Back.css";
import { useNavigate } from "react-router-dom";
function Back() {
  const navigate = useNavigate();
  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      Back
    </button>
  );
}

export default Back;
