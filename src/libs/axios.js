import axiosTool from 'axios'
export const axios = (method = 'get', url, baseUrl = '/api') => {
  return axiosTool({
    method: method,
    baseURL: baseUrl,
    url: url
  })
}
