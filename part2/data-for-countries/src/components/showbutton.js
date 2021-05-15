import React from "react";
const showPlace = (  { country }) => {

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
    </div>)  
 })
}
const ShowButton = ({setShow,country,show}) => {
 return (
   <>
       <button onClick={(e) => {
             let item = e.target.previousSibling.wholeText.trim()
             // console.log(item);
             setShow(item)
             console.log(show);
       
           }}>Show</button>
           {show === country.name ? showPlace({country}):""}
         
     </>
 )
}

export default ShowButton