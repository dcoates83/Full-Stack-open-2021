import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}
const deletePerson = (id, newObject) => {
  let confirm = window.confirm("Are you sure you want to delete this?")
  return confirm ? axios.delete(`${baseUrl}/${id}`, newObject)
   : null }

export  { getAll, create, update, deletePerson }