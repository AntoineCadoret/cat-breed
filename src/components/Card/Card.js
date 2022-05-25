import "./Card.css";
const Card = ({ catBreed }, props) => {
  return (
    <div className="card bg-slate-700 text-white rounded-md m-4 p-4 sm:box-content">
      <h2 className="text-regal-blue">{catBreed.breed}</h2>
      <p>country: {catBreed.country}</p>
      <p>origin: {catBreed.origin}</p>
      <p>coat: {catBreed.coat}</p>
      <p>pattern: {catBreed.pattern}</p>
    </div>
  );
};

export default Card;
