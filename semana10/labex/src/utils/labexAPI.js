import axios from 'axios'

axios.defaults.baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-bacelar-cruz"

const getTrips = async () => {
    try {
        const request = await axios.get('/trips')
        return request.data.trips
    } catch(err) {
        console.log(err)
    }
}

const login = (body) => {
    return axios.post('/login', body);
}

const applyToTrip = (id, data) => {
    axios
    .post(`/trips/${id}/apply`, data)
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

export {
    getTrips,
    applyToTrip,
    login
}