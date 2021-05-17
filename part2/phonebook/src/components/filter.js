import React from 'react'
import { deletePerson } from '../services/service'
import axios from 'axios'

const Button = ({errorMessage, setErrorMessage, persons,setResponse}) => {
  return (
    <button onClick={(e ) => {
      let id = parseInt(e.target.parentNode.id)
  
      axios.get('http://localhost:3001/persons').then(response => {
        const find = response.data.find(n => {
          return n.id === id
        })
     
        // error message here
        if (find === undefined) {
          throw Error
        } else {
          deletePerson(id, find)
          window.location.reload();
       }
       
      }).catch(error => {
        setErrorMessage(false)
        console.log(errorMessage, 'here');
        axios.get(`http://localhost:3001/persons`).then(response => {
          let missing = persons.find(n => { return response.data.id !== n.id })
          console.log(missing.name);
          setResponse(missing.name)
        })
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      
      })
    }}>Delete </button>
  )
}

const FilterNotes = ({filter,persons, setErrorMessage,errorMessage,setResponse}) => {
const newFilter = {
 name: filter.charAt(0).toUpperCase() + filter.slice(1)
}
let nameFilter = persons.filter(person => person.name.includes(newFilter.name))

return (
  nameFilter.map(person => {
 return (<div key={person.name}>
   <p id={person.id}>Name: {person.name} Phone: {person.phone} <Button persons={persons} setErrorMessage={setErrorMessage}errorMessage={errorMessage} setResponse={setResponse} ></Button></p>
  
   
 </div>)
}))
}
export default FilterNotes