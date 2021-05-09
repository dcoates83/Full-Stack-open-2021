import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',id:0 }
  ]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)
  const addNote = (event) => {
    event.preventDefault()

    let check =  persons.find(person => person.name === newName ) 
    if (!check) {
      const noteObject = {
        name: newName,
        // date: new Date().toISOString(),
        // important: Math.random() < 0.5,
        id: persons.length + 1,
      }

      setPersons(persons.concat(noteObject))
      setNewName('')
    } else {
      alert(`${newName} has already been added`)
     
    }
 
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
     
      <div>
        {persons.map(person => {
          // console.log(person);
         return(<div key={person.id}>
                <p>{person.name }</p>
              </div>)
        })}
      </div>
      
      <div>debug: {newName}</div>
    </div>
  )
}

export default App