import axios from 'axios'


const API_URL = '/api/users/'

const user = JSON.parse(localStorage.getItem('user'))


// Register user
const register = async (userData) => {

  const response = await axios.post(API_URL, userData)
  console.log(response.data)


  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.setItem('token', response.data.token)
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.setItem('token', response.data.token)
  }

  return response.data
}


// Send matching email
const sendemail = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'sendmatchemail', config)

  return response.data
}


// Logout user
const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const authService = {
  register,
  logout,
  login,
  sendemail
}

export default authService