import "./SingleCity.css";
function SingleCity({ children, handleClick }) {
  return (
    <div className="pill" onClick={handleClick}>
      {children}
    </div>
  );
}

export default SingleCity;
