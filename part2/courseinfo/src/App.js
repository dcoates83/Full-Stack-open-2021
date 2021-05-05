import React from 'react'

const Header = (props) => {
 
  return (
    <header>
      <h2>{props.course}</h2>
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

const Course = ({ course }) => {

  return(
    <div>
      <h1>Web Development Curriculum</h1>
      <Header course={course[0].name}/>
      <Content parts= {course[0].parts}/>
      <Total parts= {course[0].parts}/>
      <Header course={course[1].name}/>
      <Content parts= {course[1].parts}/>
      <Total parts= {course[1].parts}/>
    </div>)
  
}

const Total = (props) => {
  
  const data = props.parts

  let total = data.reduce((sum, i) => {
    
   return sum + i.exercises
  
},0)

  return (
    <div>
  
      <h3>Number of exercises: {total}</h3>
  
    </div>
   
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <Course course={courses}/>
    </div>
  )
}

export default App
