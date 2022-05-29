import React, { useEffect, useState } from "react";
import CatBreedList from "./components/Pages/BreedListPage/CatBreedList/CatBreedList";
import FactsList from "./components/Pages/FactsPage/FactsList/FactsList";

const App = () => {
  const [isFacts, setIsFacts] = useState(false);
  return (
    <div className="flex flex-col">
      <h1 className="bg-slate-800 text-4xl font-bold text-center text-white py-8 mb-10">{isFacts ? "List of interesting facts about cats" : "Cat Breeds"}</h1>
      <button onClick={() => setIsFacts(!isFacts)} className="self-center bg-slate-700 text-white p-2 m-4">
        {isFacts ? "See all the cat breeds" : "See all the special facts about cats"}
      </button>
      {!isFacts && (<CatBreedList />)}
      {isFacts && (<FactsList/>)}
    </div>
  );
};

export default App;
