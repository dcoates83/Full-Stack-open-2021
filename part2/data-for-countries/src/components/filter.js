import React, { useState,useEffect } from 'react';
import axios from 'axios'
import InputFilter from '../components/input'
import DisplayFilter from '../components/displayfilter'
const searchCountries = ({ countries, newFilter }) => {

 let newPlaces = countries.filter(country => {

   let filter = newFilter.charAt(0).toUpperCase() + newFilter.slice(1);
   let name = country.name;
   return name.includes(filter)
 })
return newPlaces
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
 return (
   <div >
     <InputFilter setNewFilter={setNewFilter}/>
     <DisplayFilter newPlaces={filterCountries} newFilter={newFilter} countries={countries} />
   </div>
 );
}

export default Filter