
import axios from 'axios'

export const userRequest = () => {
    let URL = `https://randomuser.me/api/?page=1&results=20`
   return axios.get(URL);
}
