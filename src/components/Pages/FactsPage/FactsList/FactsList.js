import React, { useEffect, useState } from "react";
import ErrorComponent from "../../../ErrorComponent/ErrorComponent";
import Facts from "../Facts/Facts";

const FactsList = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        // API call to get all the facts about cats
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
            {/* Show the error component if there is an error with the API call*/}
            {error && <ErrorComponent error={error} />}
            {/* Show the facts list */}
            {!isLoaded ? (
            <h2 className="text-xl text-center font-bold">Loading...</h2>
            ) : (
                items.data.map((item, index) => (
                    <Facts key={index} index={index} fact={item.fact}/>
                ))
            )}
        </div>
    );
};

export default FactsList;