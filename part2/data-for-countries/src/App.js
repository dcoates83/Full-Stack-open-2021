import React, { useState,useEffect } from 'react';
import axios from 'axios'
import InputFilter from './components/input'
import ShowButton from './components/showbutton'

const searchCountries = ({countries,newFilter}) => {

  let newPlaces = countries.filter(country => {

    let filter = newFilter.charAt(0).toUpperCase() + newFilter.slice(1);
    let name = country.name;
    return name.includes(filter)
  })
return newPlaces
}


const DisplayFilter = ({ newPlaces, newFilter,countries }) => {
  const [show, setShow] = useState(false)
  
  if (newFilter.length === 0) {
    return newPlaces.map(country => {
      
      return (
        <div key={country.name}>
          <p>{country.name}
            <ShowButton setShow={setShow} country={country} show={show}/>
            </p>
       
        </div>
    )})
  } else
  // somebody enters something into input
  {
    if (newPlaces.length > 10) {
      return <p>"To many countries, add some more info in the search bar"</p>
    }
    else if (newPlaces.length === 1) {
      return newPlaces.map(country => {
        return  (<div key={country.name}>
          <h2>{country.name}</h2>
          <p><strong>Capital:</strong> {country.capital }</p>
          <p><strong>Population:</strong> {country.population}</p>
          <div>
            <h3>Languages</h3>
            <ul>
               
                {country.languages.map(lan => {
                  console.log(lan);
                  return (
                    <div key={lan.name}><li>{lan.name}</li></div>
                    )
          })}
              
            </ul>
           </div>
           <div>
             <img src={country.flag} alt={country.name} style={{width:"200px"}}></img>
             </div>
         </div>)  
      })
    }
    else if (newPlaces.length < 10) {
      return newPlaces.map(country => {
        return (
          <div key={country.name}>
            <p>{country.name}
            <ShowButton setShow={setShow} country={country} show={show}/>
            </p>
          </div>
        )
      }
      )
    }
    else return <p>No languages found</p>
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
      <DisplayFilter newPlaces={filterCountries} newFilter={newFilter} countries={countries} />
  
    </div>
  );
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