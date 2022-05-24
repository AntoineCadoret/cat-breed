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
        <h1>Cat breeds!</h1>
        {items.data.map((item) => (
          <Card catBreed={item}></Card>
        ))}
      </div>
    );
  }
};

export default App;
