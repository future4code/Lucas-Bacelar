import { useEffect } from 'react'
import { goToLoginPage } from '../routes/coordinator'
import { useHistory } from "react-router"

const useAuthenticate = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user =  localStorage.getItem('user');

        if(!user || !token) {
            goToLoginPage(history)
        } else {
            return { token, user }
        }
    }, [history])
}

export default useAuthenticate