import React, { useState } from "react";

function PlantCard({ plant, onPriceChange, onDeletion }) {
  const [stocked, setStocked] = useState(true)
  const [price, setPrice] = useState(plant.price)
  const [changePrice, setChangePrice] = useState(false)
  const {id, name, image } = plant

  function handlePriceChange(event) {
    event.preventDefault()
    onPriceChange(id, price)
    setChangePrice(changePrice => !changePrice)
  }

  return (
    <li className="card">
      <img src={image || "https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{name}</h4>
      {!changePrice ? (
        <p onDoubleClick={() => setChangePrice(changePrice => !changePrice)}>Price: {price}</p>
      ) : (
        <form onSubmit={handlePriceChange}>
          <input type='text' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </form>
        )

      }
      {stocked ? (
        <button className="primary" onClick={() => setStocked(stocked => !stocked)}>In Stock</button>
      ) : (
        <button onClick={() => setStocked(stocked => !stocked)}>Out of Stock</button>
      )}
      <button style={{background: 'red', 'marginLeft': '5px'}} onClick={() => onDeletion(id)}>💀</button>
    </li>
  );
}

export default PlantCard;
