import { useParams, useHistory } from 'react-router';
import { goToAdminHomePage } from '../routes/coordinator'
import useAuthenticate from '../hooks/useAuthenticate'
import { useState, useEffect } from 'react'
import * as api from '../utils/labexAPI'
import TripsContainer from '../components/TripsDetailsPage/TripsContainer'

const TripDetailsPage = () => {
    useAuthenticate();
    const history = useHistory();
    const { id } = useParams();
    const [tripDetails, setTripDetails] = useState({});
    const [loading, setLoading] = useState(true);

    const getTripDetailsAux = () => {
        setLoading(true);
        api.getTripDetails(id)
        .then(async (res) => {
            await setTripDetails(res)
            setLoading(false)
        })
    }

    useEffect(() => {
        getTripDetailsAux()
    }, [])
    
    return (
        <div>
            <h1>TripDetailsPage</h1>
            <p>{id}</p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar </button>
            {!loading ? <TripsContainer {...tripDetails} id={id} refresh={getTripDetailsAux}/> : <div>Loading</div>}
        </div>
    )
}

export default TripDetailsPage