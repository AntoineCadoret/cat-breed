import React, { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import ErrorComponent from "../../../ErrorComponent/ErrorComponent";

const CatBreedList = () => {
  // vars
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // API call getting the cat breeds
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
      {error && <ErrorComponent error={error} />}
      {!isLoaded ? (
        <h2 className="text-xl text-center font-bold">Loading...</h2>
      ) : (
        <CardList items={items} />
      )}
    </div>
  );
};

export default CatBreedList;
