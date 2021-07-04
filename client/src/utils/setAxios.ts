import axios from 'axios';
require('dotenv').config()





export const setAxios = () => {
  if(process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = ''
  }
  axios.defaults.baseURL = 'http://localhost:5001'
}


