import axios from 'axios'

let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  if (window.location.hostname !== 'localhost') {
    baseURL = '/api'
  }
}

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 6000
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  const { data } = response
  switch (data.code) {
    case 200:
      return data.data
    default:
      return Promise.reject(data.message || 'Error')
  }
}, error => {
  return Promise.reject(error.response)
})

export default instance
