import React, { useState } from "react";
import "./Card.css";

const Card = ({ catBreed, handleCallback }, props) => {
  // const [fact, setFact] = useState([]);
  let timeout;
  
  const fetchRandomFact= () =>{
    
    fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then(
      (result) => {
        showModal(result);
      }
    );
    
    
  };
  const showModal = async(fact) =>{
    handleCallback(fact.fact);
  };
  return (
    <div onClick={()=>fetchRandomFact()} className="card bg-slate-700 text-white rounded-xl m-6 p-4 sm:box-content">
      <h2 className="text-white font-bold text-xl">{catBreed.breed}</h2>
      <p className="italic">{catBreed.country}</p>
      <p className="m-2">Origin: {catBreed.origin}</p>
      <p className="m-2">Coat: {catBreed.coat}</p>
      <p className="m-2">Pattern: {catBreed.pattern}</p>
    </div>
  );
};

export default Card;
