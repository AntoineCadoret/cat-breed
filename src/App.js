import React, { useEffect, useState } from "react";
import CatBreedList from "./components/CatBreedList/CatBreedList";

const App = () => {

  return (
    <div>
      <h1 className="text-xl font-bold">Cat Breeds</h1>
      <CatBreedList />
    </div>
  );
};

export default App;
