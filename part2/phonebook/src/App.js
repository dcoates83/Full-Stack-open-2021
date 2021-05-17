import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterNotes from "./components/filter";
import InputFilter from "./components/input";
import Form from "./components/form";
import { create, update } from "./services/service";


const App = () => {
    const [ persons, setPersons ] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const baseUrl = 'http://localhost:3001/persons'
  useEffect(() => {
    axios.get(`${baseUrl}`)
    .then(response => {
      setPersons(response.data)
  })
  }, [])
 
  const addNote = (event) => {
 event.preventDefault()
 axios.get(`${baseUrl}`).then(response => {

   let check = response.data.find(person => {return person.name === newName.charAt(0).toUpperCase() + newName.slice(1)})
      if (!check) {
        const noteObject = {
          name: newName,
          phone: newPhone,
        }
        create(noteObject)
        // setPersons(persons.concat(noteObject))
        setNewName('')
        setNewPhone('')
        window.location.reload();
      } else {
        // alert(`${newName} has already been added`)

        const newObject = {
          name: check.name,
          phone: newPhone,
          id: check.id
          
        }

        update(newObject)
        setNewName('')
        setNewPhone('')
        window.location.reload();
      }
    })
}

  return (
    <div>
      <h2>Phonebook</h2>
      <InputFilter value={filter} setFilter={setFilter} />
      <h3>Add a New</h3>
      <Form newName={newName} addNote={addNote} setNewName={setNewName} setNewPhone={setNewPhone} />
     
      <h2>Numbers</h2>
      <FilterNotes persons={persons} filter={filter}/>
    </div>
  )
}

export default App