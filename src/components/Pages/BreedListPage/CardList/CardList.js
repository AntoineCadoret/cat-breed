import React, { useState } from "react";
import Card from "../Card/Card";
import Modal from "../../../Modal/Modal";
const CardList = ({ items }, props) => {
  const [factToShow, setFactToShow] = useState("");
  const [modalShowned, setModalShowned] = useState(false);
  const handleCallback = (fact) => {
    setFactToShow(fact);
    setModalShowned(true);
  };
  const modalCallback = () => {
    setModalShowned(false);
  };
  return (
    <div>
      {/* {modalShowned && ( */}
      <Modal
        fact={factToShow}
        visible={modalShowned}
        modalCallback={modalCallback}
      />
      {/* )} */}
      {/* EITHER : L'affichage des données */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto my-0">
        {items.data.map((item, index) => (
          <Card
            catBreed={item}
            key={index}
            handleCallback={handleCallback}
          ></Card>
        ))}
      </div>
    </div>
  );
};
export default CardList;
