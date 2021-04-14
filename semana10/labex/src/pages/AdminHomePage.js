import useAuthenticate from '../hooks/useAuthenticate'
import useLogout from '../hooks/useLogout'
import { goToHomePage, goToCreateTripPage } from '../routes/coordinator'
import { useHistory } from "react-router"

const AdminHomePage = () => {
    useAuthenticate();
    const history = useHistory();

    return (
        <div>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
            <button onClick={useLogout}>Logout</button>
        </div>
    )
}

export default AdminHomePage