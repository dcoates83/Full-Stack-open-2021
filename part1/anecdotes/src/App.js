import React, { useState } from 'react'
// let num = null;
const random = ({ anecdotes }) => {
  let num = (Math.floor(Math.random() * anecdotes.length));
  console.log(num);
  return  num
  // console.log(num);
  
  
}
// const Button = ({ text, anecdotes, setSelected  }) => {
 
//   return <button >{text}</button>
// }
// const points = { quote1: 0, quote2: 0, quote3: 0, quote4: 0, quote5: 0, quote6: 0 }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [quotes, setQuotes] = useState({
    0:0,1:0,2:0,3:0,4:0,5:0
  })

  const increaseVote = (selected) => {
    const newVotes = { ...quotes };
    newVotes[selected] += 1;
    setQuotes(newVotes)
  }

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <h4>has {quotes[selected]} votes</h4>

      <div>
       
        <button onClick={() => {
          
         setSelected(random({anecdotes}))
         
        }}>Next Anecdote</button>
        <button onClick={() => {
          
         increaseVote(selected)
         
        }}>Vote</button>
        <p>Quote 1 votes: {quotes[0] }</p>
        <p>Quote 2 votes: {quotes[1] }</p>
        <p>Quote 3 votes: {quotes[2] }</p>
        <p>Quote 4 votes: {quotes[3] }</p>
        <p>Quote 5 votes: {quotes[4] }</p>
        <p>Quote 6 votes: {quotes[5] }</p>
    
      </div>
    </div>
  )
    
}

export default App