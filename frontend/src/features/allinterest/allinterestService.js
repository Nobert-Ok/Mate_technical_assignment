import axios from 'axios'

const API_URL = '/api/interests/'


// Get all user
const getallinterests = async () => {
    const response = await axios.get(API_URL+"all")
    // console.log(response.data)
    return response.data
}


const allInterestService = {
    getallinterests,
}

export default allInterestService