import React, { useState } from "react";

function NewPlantForm({ onPlantAddition }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  }) 

  function handleFormChange(event) {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    onPlantAddition(formData)
    setFormData({
      name: '',
      image: '',
      price: ''
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name}
          onChange={handleFormChange}  
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleFormChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={handleFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
