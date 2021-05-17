import axios from 'axios'
import  App  from "../App";
const addNote = (event, { persons, setNewName, setNewPhone, newName, newPhone, setPersons }) => {
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

   axios
   .post('http://localhost:3001/persons', noteObject)
     .then(response => {
       setPersons(persons.concat(noteObject))
      //  setPersons(persons.concat(noteObject))
       setNewName('')
       setNewPhone('')
     console.log(response)
   }).catch(error => {
     console.log('fail')
   })
 
 } else {
   alert(`${newName} has already been added`)
  
 }

}
export default addNote