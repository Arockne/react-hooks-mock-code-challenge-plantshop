import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onPriceChange }) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard key={plant.id} plant={plant} onPriceChange={onPriceChange} />)}</ul>
  );
}

export default PlantList;
