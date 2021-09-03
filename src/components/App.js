import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


/*
As a user:

1. I can update the price of a plant and still see the updated price after refreshing the page.
  //PATCH
  //multiple ways of doing this
   //One way
     //put a button when pressed or when image is double clicked
       //replace the new plant form
       //place all the information in the boxes
       //on a submit
         //will place the new plant form back into place
         //update the plant in the server and the plants
    //anotehr way
      //when price is double clicked 
        //input field would pop up with price
        //when the input field is submitted
          //update the plant in the server and plants

2. I can delete a plant and it is still gone when I refresh the page.
  //DELETE
*/

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(setPlants)
  }, [])

  function addNewPlant(plant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plant)
    })
    .then(r => r.json())
    .then(data => {
      setPlants([...plants, data])
    })
  }

  function onPriceChange(id, price) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ price })
    })
    .then(r => r.json())
    .then(() => {
      setPlants(plants.map(plant => {
        if (plant.id === id) {
          return { ...plant, price }
        }
        return plant;
      }))
    })
  }

  function onDeletion(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(() => {
      setPlants(plants.filter(plant => plant.id !== id))
    })
  }

  const updatedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage plants={updatedPlants} onPlantAddition={addNewPlant} search={search} onSearch={setSearch} onPriceChange={onPriceChange} onDeletion={onDeletion}/>
    </div>
  );
}

export default App;
