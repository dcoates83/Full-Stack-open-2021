import React, { useState,useEffect } from 'react';
import axios from 'axios'

const searchCountries = ({countries,newFilter}) => {

  let newPlaces = countries.filter(country => {

    let filter = newFilter.charAt(0).toUpperCase() + newFilter.slice(1);
    let name = country.name;
    return name.includes(filter)
  })

  if (newFilter.length === 0) {
    return newPlaces
  } else {
    if (newPlaces.length > 10) {
      return [{ name:"To many countries, add some more info in the search bar"}]
    }
    else {
      return  newPlaces 
    }
  }
 
}

const Filter = () => {
  const [countries, setCountries] = useState();
  const [newFilter, setNewFilter] = useState("");

useEffect(() => {
  axios.get("https://restcountries.eu/rest/v2/all").then(resolve => {
    if (resolve.data.length > 10) {
  } setCountries(resolve.data) })
}, [])

  const filterCountries = countries ? searchCountries({newFilter,countries}): [{ name: "Loading..." }]
//  console.log(filterCountries);

  return (
    <div >
      <InputFilter setNewFilter={setNewFilter}/>
      {filterCountries.map(country => {
        return (
          <div key={country.name}>
            <h3>{country.name}</h3>
            </div>
      )})}
      
    </div>
  );
}



const InputFilter = ({setNewFilter}) => {
 
  return (
    <>
      <input placeholder="search countries..." onChange={(e)=>{setNewFilter(e.target.value)}}></input>
      </>
  )
}

function App() {
  
  
  
  return (
    <div >
      <h1>Learn about Countries</h1>
      <Filter />
   
    </div>
  );
}

export default App;
