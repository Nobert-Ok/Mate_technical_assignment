import axios from 'axios'

const API_URL = '/api/users/'


// Get all user
const getallusers = async () => {
    const response = await axios.get(API_URL+"all")
    // console.log(response.data)
    return response.data
}


const UserService = {
  getallusers,
}

export default UserService