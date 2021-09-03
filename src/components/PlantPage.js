import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onPlantAddition, search, onSearch, onPriceChange }) {
  return (
    <main>
      <NewPlantForm onPlantAddition={onPlantAddition} />
      <Search search={search} onSearch={onSearch}/>
      <PlantList plants={plants} onPriceChange={onPriceChange} />
    </main>
  );
}

export default PlantPage;
