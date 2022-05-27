import React, { useEffect, useState } from "react";
import ErrorComponent from "../../../ErrorComponent/ErrorComponent";

const FactsList = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch("https://catfact.ninja/facts")
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
    return(
        <div>
            <h2>FactsList</h2>
            {error && <ErrorComponent erreur={error} />}
            {!isLoaded ? (
            <h2 className="text-xl text-center font-bold">Loading...</h2>
            ) : (
                <p>items</p>
            // <CardList items={items} />
            )}
        </div>
    );
};

export default FactsList;