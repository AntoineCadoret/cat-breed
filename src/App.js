import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";

const App = () => {
  // comment here
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
      <h1 className="text-xl font-bold">Cat Breeds</h1>
      {/* EITHER l'erreur */}
      {error && (
        <>
          <h2 className="text-xl font-bold">An error occured</h2>
          <p className="text-red-700">Error : {error.message}</p>
        </>
      )}
      {/* EITHER le loading */}
      {!isLoaded ? (
        <h2 className="text-xl text-center font-bold">Loading...</h2>
      ) : (
        <div className="grid grid-cols-3">
          {/* EITHER : L'affichage des données */}
          {items.data.map((item) => (
            <Card catBreed={item}></Card>
          ))}
        </div>
      )}
    </div>
  );
  // comment here
  if (error) {
    return (
      <div>
        <h1 class="text-xl font-bold">Cat Breeds</h1>
        <h2 class="text-l italic">An error occured</h2>
        <p class="text-red-700">Error: {error.message}</p>
      </div>
    );
    // TODO CHECK CONDITION RIGHT THERE
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1 className="text-center">Cat breeds!</h1>
        <div className="grid grid-cols-3">
          {items.data.map((item) => (
            <Card catBreed={item}></Card>
          ))}
        </div>
      </div>
    );
  }
};

export default App;
