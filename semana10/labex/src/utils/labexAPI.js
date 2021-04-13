import axios from 'axios'

axios.defaults.baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-bacelar"

const getTrips = async () => {
    try {
        const request = await axios.get('/trips')
        return request.data.trips
    } catch(err) {
        console.log(err)
    }
}

export {
    getTrips
}