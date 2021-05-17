import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterNotes from "./components/filter";
import InputFilter from "./components/input";
import Form from "./components/form";
// import  addNote  from "./components/addNote";


const App = () => {
    const [ persons, setPersons ] = useState([
  
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      // console.log(response.data);
      setPersons(response.data)
  })
  }, [])
 
  const addNote = (event) => {
 event.preventDefault()
 let check = persons.find(person => person.name === newName)
 
 if (!check) {
   const noteObject = {
     name: newName,
     phone: newPhone,
     // date: new Date().toISOString(),
     // important: Math.random() < 0.5,
    //  id: persons.length + 1,
   }

   axios
   .post('http://localhost:3001/persons', noteObject)
   .then(response => {
     console.log(response)
   })
   setPersons(persons.concat(noteObject))
   setNewName('')
   setNewPhone('')
 } else {
   alert(`${newName} has already been added`)
 }
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