import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stocked, setStocked] = useState(true)
  const {id, name, image, price} = plant
  return (
    <li className="card">
      <img src={image || "https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button className="primary" onClick={() => setStocked(stocked => !stocked)}>In Stock</button>
      ) : (
        <button onClick={() => setStocked(stocked => !stocked)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
