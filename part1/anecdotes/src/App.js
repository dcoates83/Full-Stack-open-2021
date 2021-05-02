import React, { useState } from 'react'
const random = ({ anecdotes }) => {
  let num = (Math.floor(Math.random() * anecdotes.length));
  return  num
}
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
  const highestVoted = () => {
    let highNum = 0;
    let highQuote = 0;
    for (const quote in quotes) {
      let property = quotes[quote];
      if (property > highNum) {
        highNum = property
        highQuote = quote
      }
    }
   return highQuote
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <h3>{anecdotes[selected]}</h3>
      <p>Total {quotes[selected]} votes</p>
      <div>
        <button onClick={() => {setSelected(random({anecdotes}))}}>Next Anecdote</button>
        <button onClick={() => {increaseVote(selected)}}>Vote</button>
        <h3>Anecdote with the most votes</h3>
        <p>
          {anecdotes[highestVoted()]}</p>
        <p>Total: {quotes[highestVoted()]} votes</p>
    
      </div>
    </div>
  )
    
}

export default App