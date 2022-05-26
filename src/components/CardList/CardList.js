import React, { useState } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
const CardList = ({ items }, props) => {
    const [factToShow, setFactToShow] = useState("");
    const [modalShowned, setModalShowned] = useState(false);
    const handleCallback = (fact)=>{
        setFactToShow(fact);
        setModalShowned(true);
    };
  return (
    <div className="grid grid-cols-3">
        {modalShowned && <Modal fact={factToShow}/>}
      {/* EITHER : L'affichage des données */}
      {items.data.map((item, index) => (
        <Card catBreed={item} key={index} handleCallback={handleCallback}></Card>
      ))}
    </div>
  );
};
export default CardList;
