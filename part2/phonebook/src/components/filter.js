import React from 'react'


const FilterNotes = ({filter,persons}) => {
const newFilter = {
 name: filter.charAt(0).toUpperCase() + filter.slice(1)
}

let nameFilter = persons.filter(person => person.name.includes(newFilter.name))

return (nameFilter.map(person => {
 return (<div key={person.name}>
   <p>Name: {person.name}</p>
   <p>Phone: {person.phone}</p>
   
 </div>)
}))
}
export default FilterNotes