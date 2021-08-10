import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const create = (newObject) => {
  const request = axios.post('/api/persons', newObject)
  return request.then(response => response.data)
}

const update = (newObject) => {
  let confirm = window.confirm("Seem like you already have this person! Click Ok to update  their phone # or cancel to do nothing")
  let request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
  return confirm ? request.then(response => response.data) : null
}
const deletePerson = (id, newObject) => {
  let confirm = window.confirm("Are you sure you want to delete this?")
  console.log(id, newObject);
  return confirm ? axios.delete(`${baseUrl}/${id}`, newObject): null }


export default { getAll, create, update, deletePerson }