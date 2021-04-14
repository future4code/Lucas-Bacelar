import { useEffect } from 'react'
import { goToLoginPage } from '../routes/coordinator'
import { useHistory } from "react-router"

const useLogout = () => {
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        goToLoginPage(history)
    }, [history])
}

export default useLogout