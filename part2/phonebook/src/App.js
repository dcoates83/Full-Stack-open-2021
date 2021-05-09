import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      // date: new Date().toISOString(),
      // important: Math.random() < 0.5,
      // id: persons.length + 1,
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
    console.log(persons);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName }onChange={(e) => {
      
            setNewName(e.target.value);

          } }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     
      <ul>
        {persons.map(person => {
          console.log(person);
         return(<div key={person.name}>
                <p>{person.name }</p>
              </div>)
        })}
      </ul>
      
      <div>debug: {newName}</div>
    </div>
  )
}

export default App