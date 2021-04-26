import React from 'react'

const Header = (props) => {

  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Part part={part1} exercise={exercises1 }/>
      <Part part={part2} exercise={exercises2 }/>
      <Part part={part3} exercise={exercises3 }/>
  
      </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part}, {props.exercise}</p>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}
// part1={part1}
        // part2={part2}
        // part3={part3}
        // exercises1={exercises1}
        // exercises2={exercises2}
        // exercises3={exercises3}
export default App
