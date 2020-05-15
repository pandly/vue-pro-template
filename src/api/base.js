import axios from './config'
import qs from 'qs'

export const post = (url, data, extend = { isJson: true }) => {
  const defaultConfig = {
    url,
    method: 'POST',
    data: extend.isJson ? data : qs.stringify(data) // 通过isJson来确定传参格式是json还是formData
  }
  const config = { ...defaultConfig, ...extend }
  return axios(config).then(res => {
    return res
  }, err => {
    return Promise.reject(err)
  })
}

export const get = (url, data, extend = {}) => {
  const defaultConfig = {
    url,
    method: 'GET',
    params: data
  }
  const config = { ...defaultConfig, ...extend }
  return axios(config).then(res => {
    return res
  }, err => {
    console.log(err)
    return Promise.reject(err)
  })
}
