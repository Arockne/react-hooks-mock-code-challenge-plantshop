import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onPriceChange, onDeletion }) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard key={plant.id} plant={plant} onPriceChange={onPriceChange} onDeletion={onDeletion}/>)}</ul>
  );
}

export default PlantList;
