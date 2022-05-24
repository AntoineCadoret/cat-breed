import "./Card.css";
const Card = ({ catBreed }, props) => {
  return (
    <div className="card rounded-md m-4 p-1 md:container md:mx-auto">
      <h2 className="text-regal-blue">{catBreed.breed}</h2>
    </div>
  );
};

export default Card;
