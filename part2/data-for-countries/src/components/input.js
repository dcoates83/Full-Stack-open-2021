import React from 'react'
 const InputFilter = ({ setNewFilter }) => {
 return (
   <>
     <input placeholder="search countries..." onChange={(e)=>{setNewFilter(e.target.value)}}></input>
     </>
 )
 }

 export default InputFilter