import { useHistory } from "react-router"
import { useState, useEffect } from 'react'
import useAuthenticate from '../hooks/useAuthenticate'
import * as api from '../utils/labexAPI'
import { goToHomePage, goToCreateTripPage, goToLoginPage} from '../routes/coordinator'


const AdminHomePage = () => {
    useAuthenticate();
    const history = useHistory();
    const [trips, setTrips] = useState([])

    useEffect(() => {
        api.getTrips()
        .then((res) => {
            setTrips(res)
        }) 
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        goToLoginPage(history)
    }

    const tripsList = trips.map((trip) => {
        return <div key={trip.id} style={{background: "gray", border: "1px solid red",}}>
            <p>{trip.name}</p>
            <p>{trip.description}</p>
            <p>{trip.planet}</p>
            <p>{trip.durationInDays}</p>
            <p>{trip.date}</p>
        </div>
    })

    return (
        <div>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
            <button onClick={logout}>Logout</button>
            <div>
                {tripsList}
            </div>
        </div>
    )
}

export default AdminHomePage