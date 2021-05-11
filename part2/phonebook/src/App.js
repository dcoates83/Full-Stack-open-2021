import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  // const [showAll, setShowAll] = useState(true)
  const filterNotes = (e) => {
    const newFilter = {
      name: filter
    }
    let nameFilter = persons.filter(person => person.name.includes(newFilter.name))
    console.log(nameFilter);
    
    return (nameFilter.map(person => {
      return (<div key={person.name}>
        <p>Name: {person.name}</p>
        <p>Phone: {person.phone}</p>
        -----------
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
      <div>
        Filter shown with: <input value={filter} onChange={(e) => {   setFilter(e.target.value) }}/>
        </div>
      <h3>Add a New</h3>
      <form onSubmit={addNote}>
        <div>
          Name: <input value={newName }onChange={(e) => {setNewName(e.target.value)} }/>
        </div>
        <div>
          Number: <input value={newPhone }onChange={(e) => {setNewPhone(e.target.value)} }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
{/*      
      <div>
        {persons.map(person => {
          // console.log(person);
         return(<div key={person.name}>
           <p>Name: {person.name} </p>
           <p>Phone: { person.phone} </p>
              </div>)
        })}
      </div>
      
      <div>debug: {filter}</div> */}
      <div>
        {filterNotes()}
      </div>
    </div>
  )
}

export default App