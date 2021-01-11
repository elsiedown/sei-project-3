import axios from 'axios'
import { getToken } from './auth'
const baseUrl = '/api'

function headers() {
  return {
    headers: { authorization: `Bearer ${getToken()}` }
  }
}

//* SPACES Requests

export function getAllSpaces() {
  return axios.get(`${baseUrl}/spaces`)
}

export function createSpace(formdata) {
  return axios.post(`${baseUrl}/spaces`, formdata, headers())
}

export function editSpace(id, formdata) {
  return axios.put(`${baseUrl}/spaces/${id}`, formdata, headers())
}

export function deleteSpace(id) {
  return axios.delete(`${baseUrl}/spaces/${id}`, headers())
}

// Show Single Space 

export function getSingleSpace(id) {
  return axios.get(`${baseUrl}/spaces/${id}`)
}

// Add to favourites

export function addToFavourites(id) {
  console.log(headers())
  return axios.post(`${baseUrl}/spaces/${id}/favourite`, null, headers())
}

//* AUTH Requests

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}

export default getAllSpaces
