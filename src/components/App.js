import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


/*
As a user:

2. I can add a new plant to the page by submitting the form.
  //useState within newPlantForm to make a controlled form
  //on a submit reset the state of the form
    //also make POST request
    //reassign plants to have the added plant
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.
*/

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(setPlants)
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
