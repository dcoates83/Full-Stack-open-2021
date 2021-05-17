import React from 'react'
import { deletePerson } from '../services/service'

const Button = ({persons}) => {
  return (
    <button onClick={(e) => {
      let id = parseInt(e.target.parentNode.id)
      
      const find = persons.find(n => {
        return n.id === id
      })
      deletePerson(id, find)
      window.location.reload();
    }}>Delete </button>
  )
}

const FilterNotes = ({filter,persons}) => {
const newFilter = {
 name: filter.charAt(0).toUpperCase() + filter.slice(1)
}
let nameFilter = persons.filter(person => person.name.includes(newFilter.name))

return (nameFilter.map(person => {
 return (<div key={person.name}>
   <p id={person.id}>Name: {person.name} Phone: {person.phone} <Button persons={persons}></Button></p>
  
   
 </div>)
}))
}
export default FilterNotes