import axios from 'axios'
import queryString from 'query-string'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

api.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config
})

api.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    // Handle errors
    return Promise.reject(error)
  }
)

export default api