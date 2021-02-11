import http from 'http'

export default function ({ route }) {
  return  { url: route.fullPath }
  // return http.post('http://my-stats-api.com', {
  //   url: route.fullPath
  // })
}