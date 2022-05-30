import React from "react";
import "./Card.css";

const Card = ({ catBreed, handleCallback }) => {
  
  const fetchRandomFact= () =>{
    // API call getting one fact about cats
    fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then(
      (result) => {
        showModal(result);
      }
    );
  };
  const showModal = async(fact) =>{
    // Sending the fact to the CardList component
    handleCallback(fact.fact);
  };
  return (
    // Card giving the information about one cat breed
    <div onClick={()=>fetchRandomFact()} className="card bg-slate-700 text-white rounded-xl m-6 p-4 sm:box-content hover:transition-colors hover:bg-slate-600">
      <h2 className="text-white font-bold text-xl">{catBreed.breed}</h2>
      <p className="italic my-1">{catBreed.country}</p>
      {catBreed.origin && <p className="m-2">Origin: {catBreed.origin}</p>}
      {catBreed.coat && <p className="m-2">Coat: {catBreed.coat}</p>}
      {catBreed.pattern && <p className="m-2">Pattern: {catBreed.pattern}</p>}
    </div>
  );
};

export default Card;
