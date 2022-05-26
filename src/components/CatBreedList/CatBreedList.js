import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CatBreedList = () => {
  // vars
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // comment here
  useEffect(() => {
    fetch("https://catfact.ninja/breeds")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      {error && (
        <>
          <h2 className="text-xl font-bold">An error occured</h2>
          <p className="text-red-700">Error : {error.message}</p>
        </>
      )}
      {!isLoaded ? (
        <h2 className="text-xl text-center font-bold">Loading...</h2>
      ) : (
        <div className="grid grid-cols-3">
          {/* EITHER : L'affichage des données */}
          {items.data.map((item, index) => (
            <Card catBreed={item} key={index}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CatBreedList