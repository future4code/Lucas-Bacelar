import axios from 'axios'

const getCountries = async () => {
    try {
        const request = await axios.get('https://restcountries.eu/rest/v2/all');
        return request.data  
    } catch(err) {
        console.log(err.message)
    }
}

export default getCountries