import React, { useState } from 'react';
import ShowButton from '../components/showbutton'


const DisplayFilter = ({ newPlaces, newFilter }) => {
 const [show, setShow] = useState(false)
 
 if (newFilter.length === 0) {
   return newPlaces.map(country => {
     
     return (
       <div key={country.name}>
         <h4>{country.name}
           <ShowButton setShow={setShow} country={country} show={show}/>
           </h4>
      
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

export default DisplayFilter