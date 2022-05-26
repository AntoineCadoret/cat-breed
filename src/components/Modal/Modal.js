import React, { useState } from "react";

const Modal = ({ fact, modalCallback, visible }, props) => {

  const unShow = () => {
    modalCallback();
  };
  return (
    <div className={visible ? "block" : "hidden"}>
      <div className="modal rounded-md bg-white fixed top-0 right-0 left-0 z-50 w-3/4 m-auto md:inset-0 h-modal md:h-3/4">
        <h4 className="p-4 bg-slate-800 text-white font-bold">
          A random fact on Cats
        </h4>
        <p className="p-8">{fact}</p>
        <button className="" onClick={() => unShow()}>close</button>
      </div>
    </div>
  );
};
export default Modal;
