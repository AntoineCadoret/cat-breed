import Card from "../Card/Card";
const CardList = ({ items }, props) => {
  return (
    <div className="grid grid-cols-3">
      {/* EITHER : L'affichage des données */}
      {items.data.map((item, index) => (
        <Card catBreed={item} key={index}></Card>
      ))}
    </div>
  );
};
export default CardList;
