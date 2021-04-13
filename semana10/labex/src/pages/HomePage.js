import { useHistory } from "react-router"
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator'

const HomePage = () => {
    const history = useHistory();

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={() => goToListTripsPage(history)}>Ver viagens</button>
            <button onClick={() => goToLoginPage(history)}> Area de Admin</button>
        </div>
    )
}

export default HomePage