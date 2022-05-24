import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://catfact.ninja/breeds")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[]);
  if (error) {
    return <div>
      <h1>Cat Breeds</h1>
      <h2>An error occured</h2>
      <p>Error: {error.message}</p>
      </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.data.map(item => (
         <Card catBreed={item}></Card>
        ))}
      </ul>
    );
  }
}

export default App;
