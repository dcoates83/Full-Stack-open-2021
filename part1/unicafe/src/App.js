import React, { useState } from 'react'

const Button = (props)=>{
  return <button onClick={props.handleClick}>{props.text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, bad: 0, neutral: 0, total: 0, average:0
  })
  
  const handleGood = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
      total: clicks.total + 1,
      average: clicks.average + 1,
    }
    setClicks(newClicks)
  }
  const handleBad = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
      total: clicks.total + 1,
      average: clicks.average - 1,
    }
    setClicks(newClicks)
  }
  const handleNeutral = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
      total: clicks.total +1,
    }
    setClicks(newClicks)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
    
      <h2>Statistics</h2>
      <p>Good {clicks.good}</p>
      <p>Neutral {clicks.neutral}</p>
      <p>Bad {clicks.bad}</p>
      <p>Total {clicks.total}</p>
      <p>Average {clicks.average / clicks.total}</p>
      <p>Positive {clicks.good / clicks.total * 100}%</p>
    
      

    </div>
  )
}

export default App;
