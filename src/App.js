import React, { useEffect, useState } from "react";
import CatBreedList from "./components/Pages/BreedListPage/CatBreedList/CatBreedList";
import FactsList from "./components/Pages/FactsPage/FactsList/FactsList";

const App = () => {
  const [isFacts, setIsFacts] = useState(false);
  return (
    <div className="flex flex-col bg-slate-200">
      <h1 className="bg-slate-800 text-4xl font-bold text-center text-white py-8 mb-10">Cat Breeds</h1>
      <button onClick={() => setIsFacts(!isFacts)} className="self-center bg-slate-700 text-white p-2 m-4">
        {isFacts ? "voir toutes les races de chats" : "voir tous les faits spécials sur les chats"}
      </button>
      {!isFacts && (<CatBreedList />)}
      {isFacts && (<FactsList/>)}
    </div>
  );
};

export default App;
