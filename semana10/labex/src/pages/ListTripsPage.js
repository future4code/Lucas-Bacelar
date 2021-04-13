import {useState , useEffect} from 'react'
import { useHistory } from "react-router"
import * as api from '../utils/labexAPI'
import { goToApplicationFormPage } from '../routes/coordinator'

const ListTripsPage = () => {
    const [trips, setTrips] = useState([]);
    const history = useHistory();

    useEffect(() => {
       api.getTrips()
       .then((response) => {
           setTrips(response);
       })
    }, [])

    const tripsList = trips.map((trip) => {
        return <li key={trip.id}>
            <p>{trip.name}</p>
            <p>{trip.description}</p>
            <p>{trip.planet}</p>
            <p>{trip.durationInDays}</p>
            <p>{trip.date}</p>
        </li>
    })

    return (
        <div>
            <h1>ListTripsPage</h1>
            <button onClick={() => history.goBack()}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
            <ul>
                {tripsList.length !== 0 ?  tripsList : <div>Loading...</div>}
            </ul>
        </div>
    )
}

export default ListTripsPage