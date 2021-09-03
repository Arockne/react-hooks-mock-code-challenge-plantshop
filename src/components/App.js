import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


/*
As a user:

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

  const updatedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage plants={updatedPlants} onPlantAddition={addNewPlant} search={search} onSearch={setSearch}/>
    </div>
  );
}

export default App;
