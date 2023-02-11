import "./Back.css";
import { useNavigate } from "react-router-dom";
function Back() {
  const navigate = useNavigate();
  return (
    <div className="btn-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default Back;
