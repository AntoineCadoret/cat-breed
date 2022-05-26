import React, { useState } from "react";
import "./Card.css";

const Card = ({ catBreed, handleCallback }, props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fact, setFact] = useState([]);
  
  const fetchRandomFact= () =>{
    fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setFact(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  };
  const showModal = async() =>{
    try{
      await fetchRandomFact();
    } catch(e){
      console.error(e);
    } finally{
      handleCallback(fact.fact);
    }
  };
  return (
    <div onClick={()=>showModal()} className="card bg-slate-700 text-white rounded-md m-4 p-4 sm:box-content">
      <h2 className="text-white font-bold text-xl">{catBreed.breed}</h2>
      <p>country: {catBreed.country}</p>
      <p>origin: {catBreed.origin}</p>
      <p>coat: {catBreed.coat}</p>
      <p>pattern: {catBreed.pattern}</p>
    </div>
  );
};

export default Card;
