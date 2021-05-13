import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({filter, setFilter}) => {
  // console.log(e);
  return (
    <div>
    Filter shown with: <input value={filter} onChange={(e) => { setFilter(e.target.value) }}/>
    </div>
  )
}
const Form = ({addNote,newName,setNewName,newPhone,setNewPhone}) => {
  return (<form onSubmit={addNote}>
        <div>
          Name: <input value={newName }onChange={(e) => {setNewName(e.target.value)} }/>
        </div>
        <div>
          Number: <input value={newPhone }onChange={(e) => {setNewPhone(e.target.value)} }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>)
}
const FilterNotes = ({ filterNotes }) => {
  return (
    <>
      {filterNotes()}
      </>
  )
}

const App = () => {
  
  useEffect(() => {
    const promise = axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log(response.data);
      setPersons(response.data)
  })
  }, [])
  
  // console.log(promise)
  const [ persons, setPersons ] = useState([
    // { name: 'Arto Hellas', phone: '040-123456' },
    // { name: 'Ada Lovelace', phone: '39-44-5323523' },
    // { name: 'Dan Abramov', phone: '12-43-234345' },
    // { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  // const [showAll, setShowAll] = useState(true)
  const filterNotes = () => {
    const newFilter = {
      name: filter
    }
    let nameFilter = persons.filter(person => person.name.includes(newFilter.name))
    // console.log(nameFilter);
    
    return (nameFilter.map(person => {
      return (<div key={person.name}>
        <p>Name: {person.name}</p>
        <p>Phone: {person.phone}</p>
        
      </div>)
    }))
  }
  const addNote = (event) => {
    event.preventDefault()

    let check = persons.find(person => person.name === newName)
   
    
    if (!check) {
      const noteObject = {
        name: newName,
        phone: newPhone,
        // date: new Date().toISOString(),
        // important: Math.random() < 0.5,
        id: persons.length + 1,
      }

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
      <Filter value={filter} setFilter={setFilter} />
      <h3>Add a New</h3>
      <Form newName={newName} addNote={addNote} setNewName={setNewName} setNewPhone={setNewPhone} />
     
      <h2>Numbers</h2>
      <FilterNotes filterNotes={filterNotes}/>
    </div>
  )
}

export default App