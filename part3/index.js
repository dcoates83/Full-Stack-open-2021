const express = require('express')
const app = express()


// Without the json-parser, the body property would be undefined. The json-parser functions so that it takes the JSON data of a request, transforms it into a JavaScript object and then attaches it to the body property of the request object before the route handler is called.
app.use(express.json())

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

// **Fetching all
// The request is responded to with the json method of the response object. Calling the method will send the persons array that was passed to it as a JSON formatted string.
app.get('/api/persons', (request, response) => {
 
  response.json(persons)

})
app.get('/api/info', (request, response) => {
 
  response.send(`
  <p>Phonebook has ${persons.length} people</p>
  ${new Date()}
  `)

})

// **Fetching a single resource
// The cause of the bug becomes clear. The id variable contains a string '1', whereas the ids of persons are integers. 
app.get('/api/persons/:id', (request, response) => {
 const id = Number(request.params.id)
 const person = persons.find(person => {
   // console.log(person.id, typeof person.id, id, typeof id, person.id === id)
   return person.id === id
 })
 if (person) {
  response.json(person)
 } else {
  //  If no person is found, the server should respond with the status code 404 not found instead of 200.
  response.status(404).end()
}
 console.log(person)

})

// //** Receiving data to a server(sending data)
// making an HTTP POST request
// A potential cause for issues is an incorrectly set Content-Type header in requests. 
 // sending all the information in the request body in JSON format.

 const generateId = () => {
  const maxId = persons.length > 0
    ? Math.floor(Math.random()*10000)
    : 0
  return maxId + 1
 }


app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.content) {
    
    return response.status(400).json({ 
      error: 'body content missing' 
    })
  }

  const person = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }
// console.log(person);
  persons = persons.concat(person)
  response.json(person)
})


// ** Deleting resources

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
   persons = persons.filter(person => person.id !== id)
// we respond to the request with the status code 204 no content and return no data with the response.
  response.status(204).end()
})




const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})