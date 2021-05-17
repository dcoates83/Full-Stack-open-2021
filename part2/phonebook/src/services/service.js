import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = ( newObject) => {
  let confirm = window.confirm("Seem like you already have this person! Click Ok to update  their phone # or cancel to do nothing")
  return confirm ? axios.put(`${baseUrl}/${newObject.id}`, newObject) : null
}
const deletePerson = (id, newObject) => {
  let confirm = window.confirm("Are you sure you want to delete this?")
  return confirm ? axios.delete(`${baseUrl}/${id}`, newObject)
   : null }

export  { getAll, create, update, deletePerson }