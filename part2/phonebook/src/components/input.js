import React from "react";

const InputFilter = ({ filter, setFilter }) => {

 return (
   <div>
   Filter shown with: <input value={filter} onChange={(e) => { setFilter(e.target.value) }}/>
   </div>
 )

}
export default InputFilter 