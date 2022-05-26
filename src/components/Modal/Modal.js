import React from "react";

const Modal = ({ fact, modalCallback, visible }, props) => {
  const unShow = () => {
    modalCallback();
  };
  return (
    <div className={visible ? "block" : "hidden"}>
      <div className="bg-black/50 w-full h-full fixed top-0 right-0 left-0 z-300" onClick={() => unShow()}>
        <div className="modal rounded-md bg-gray-200 fixed top-0 right-0 left-0 z-500 w-1/3 m-auto md:inset-0 h-modal md:h-1/3 flex flex-col">
          <div className="flex flex-row justify-between bg-slate-800 text-white font-bold">
          <h4 className="p-4">
            A random fact on Cats
          </h4>
          <button className="px-8" onClick={() => unShow()}>
            X
          </button>
          </div>
          
          <p className="my-4 p-8 self-center">{fact}</p>
          
        </div>
      </div>
    </div>
  );
};
export default Modal;
