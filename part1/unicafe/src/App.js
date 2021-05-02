import React, { useState } from 'react'

const Button = (props)=>{
  return <button onClick={props.handleClick}>{props.text}</button>
}
const Statistic = ({text,value})=>{
  return <td>{text} {value}</td>
}
const Statistics = ({ clicks, handleBad, handleGood, handleNeutral }) => {
  if (clicks.total === 0) {
    return (
      <div>
        <Button handleClick={handleGood} text="Good" />
    <Button handleClick={handleNeutral} text="Neutral" />
    <Button handleClick={handleBad} text="Bad" />
        <p>No feedback has been given</p>
      </div>
    )
  }
  return (
    <div>
    
    <Button handleClick={handleGood} text="Good" />
    <Button handleClick={handleNeutral} text="Neutral" />
    <Button handleClick={handleBad} text="Bad" />
    
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr><Statistic text="Good" value={clicks.good} /></tr>
          <tr><Statistic text="Bad" value={clicks.bad} /></tr>
          <tr><Statistic text="Neutral" value={clicks.neutral} /></tr>
          <tr><Statistic text="Total" value={clicks.total} /></tr>
          <tr><Statistic text="Average" value={clicks.average / clicks.total} /></tr>
          <tr><Statistic text="Positive" value={`${clicks.good / clicks.total * 100} %`} /></tr>
        </tbody>
      </table>
    </div>)
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
      
    
      <Statistics clicks={clicks} handleGood={handleGood} handleBad={handleBad} handleNeutral={handleNeutral}/>
      

    </div>
  )
}

export default App;
