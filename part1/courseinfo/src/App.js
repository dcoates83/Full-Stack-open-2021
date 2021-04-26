import React from 'react'

const Header = (props) => {
 
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part array = {props}/>
      </div>
  )
}

const Part = (props) => {
  const data = props.array.parts
  return (
    <div>
       <p> {data.[0].name} exercise={data[0].exercises }</p>
      <p> {data[1].name} exercise={data[1].exercises }</p>
      <p> {data[2].name} exercise={ data[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  const data = props.parts

  return (
    <div>
   
      <p>Number of exercises {data[0].exercises + data[1].exercises + data[2].exercises}</p>
  
    </div>
   
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    }, {
      name: 'Using props to pass data',
      exercises: 7
    },{
      name: 'State of a component',
      exercises: 14
    }]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts= {course.parts}/>
      <Total parts= {course.parts}/>
    </div>
  )
}

export default App
