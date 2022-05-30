import React, { useState } from "react";
import Card from "../Card/Card";
import Modal from "../../../Modal/Modal";

const CardList = ({ items }) => {
  const [factToShow, setFactToShow] = useState("");
  const [modalShowned, setModalShowned] = useState(false);

  // function that make the modal visible with the random fact
  const handleCallback = (fact) => {
    setFactToShow(fact);
    setModalShowned(true);
  };

  // function hiding the modal
  const modalCallback = () => {
    setModalShowned(false);
  };

  return (
    <div>
      <Modal
        fact={factToShow}
        visible={modalShowned}
        modalCallback={modalCallback}
      />
      
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
