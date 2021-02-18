import Axios from 'axios'

const StarwarsAPI = Axios.create({
	baseURL: 'https://swapi.dev/api/'
})

// Funkade ej live om man gjorde på det andra sättet, den klagade på http. Men detta funkar :)))
const baseUrl = 'https://swapi.dev/api/'

export const getPerson = (id)=> {
  return Axios.get(baseUrl + 'people/' + id + '/')
    .then(res => res)
    .catch(err => console.error(err))
}

export default StarwarsAPI