import Axios from 'axios'

const StarwarsAPI = Axios.create({
	baseURL: 'https://swapi.dev/api/'
})

const baseUrl = 'https://swapi.dev/api/'

export const getPerson = (id)=> {
  return Axios.get(baseUrl + 'people/' + id + '/')
    .then(res => res)
    .catch(err => console.error(err))
}

export default StarwarsAPI