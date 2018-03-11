import axios from 'axios'
export const fetchLibraryData = (library) => axios.get(`/${library}`)

export const fetchItemData = (library, item) => 
  axios.get(`/${library}/${item}`)
    .then(resp => resp.data)
    .catch(error => error)
