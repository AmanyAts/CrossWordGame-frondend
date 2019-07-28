import apiUrl from './apiConfig'
import axios from 'axios'

export const index = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/results',
    headers: {
        'Authorization': `Bearer ${user.token}`
      }
  })
}
export const indexAll =() => {
    return axios({
      method: 'GET',
      url: apiUrl + '/all_results',
    //   headers: {
    //       'Authorization': `Bearer ${user.token}`
    //     }
    })
  }


export const create = (user,time) => {
    return axios({
      method: 'POST',
      url: apiUrl + '/results',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: {
        score:{
            time:time
        }
      }
    })
  }