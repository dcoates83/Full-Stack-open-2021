import React from 'react'



const Form = ({ addNote, newName, setNewName, newPhone, setNewPhone }) => {
 

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

export default Form