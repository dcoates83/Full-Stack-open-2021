import React from 'react'

const Header = (props) => {
 
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Content = (props) => {
  // console.log(props.parts);
  let data = props.parts;
 
  return (
    <div>
      
        {data.map(note => {
          return (<div key={note.id}>
            <Part name={note.name} exercise={note.exercises}/>
          </div>)
        })}

      </div>
  )
}

const Part = (props) => {
  // console.log(props);
  return (
    <div>
       <p> {props.name} {props.exercise }</p>
  
    </div>
  )
}

const Course = ({course}) => {
  return(
  <div>
      <Header course={course.name}/>
      <Content parts= {course.parts}/>
      <Total parts= {course.parts}/>
    </div>)
  
}

const Total = (props) => {
  
  const data = props.parts

  let total = data.reduce((sum, i) => {
    
   return sum + i.exercises
  
},0)

  return (
    <div>
  
      <p>Number of exercises {total}</p>
  
    </div>
   
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App
