import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.postRequest('/login', data)
}

export const getUserInfo = () => {
  return axios.postRequest('/user/get_info')
}

export const logout = () => {
  return axios.postRequest('/user/logout')
}

export const getUserMenu = () => {
  return axios.postRequest('/user/userMenu')
}

export const getUserAuthority= (param) => {
  return axios.postRequest('/user/userAuthority',param)
}
