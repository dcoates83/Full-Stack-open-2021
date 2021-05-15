import React, { useState,useEffect }  from "react";
import axios from 'axios'

const searchWeather = ({ weather }) => {
 let foundWeather = [
  weather
 ]
 return foundWeather
  
}

const CheckWeather = ({ country }) => {
 const [weather, setWeather] = useState()

 let name = country.name
 useEffect(() => {
  
  const api_key = process.env.REACT_APP_API_KEY
  axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${name}`).then(resolve => {
  setWeather(resolve.data.current)

 })

}, [])
 
 const newWeather = weather ? searchWeather({ weather }) : [{ temperature: "Loading..." }]
 return (
  <div key={country.name}>
   <h3>Weather in {country.name}</h3>
{newWeather.map(place => {
    return (
     <div key={country.name}>
      <p>Temperature: {place.temperature}</p>
      <p>Wind: {place.wind_speed}mph in the {place.wind_dir } direction</p>
      <img src={place.weather_icons} alt={place.weather_icons} style={{width:"100px"}}></img>
    </div>
    )
   })}
 </div>
 )
}


const showPlace = ({ country,weather, setWeather }) => {
 let showNewPlaces = [country];
 return showNewPlaces.map(country => {
   return  (<div key={country.name}>
     
     <p><strong>Capital:</strong> {country.capital }</p>
     <p><strong>Population:</strong> {country.population}</p>
     <div>
       <h3>Languages</h3>
       <ul>
          
           {country.languages.map(lan => {
             return (
               <div key={lan.name}><li>{lan.name}</li></div>
               )
     })}
       </ul>
      </div>
      <div>
        <img src={country.flag} alt={country.name} style={{width:"200px"}}></img>
    </div>
    <CheckWeather country={country}/>
    </div>)  
 })
}
const ShowButton = ({ setShow, country, show }) => {
 const [weather, setWeather] = useState()
 return (
   <>
       <button onClick={(e) => {
             let item = e.target.previousSibling.wholeText.trim()
             setShow(item)
           }}>Show</button>
           {show === country.name ? showPlace({country,weather, setWeather}):""}
         
     </>
 )
}

export default ShowButton