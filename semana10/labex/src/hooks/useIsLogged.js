import { useEffect } from 'react'
import { useHistory } from 'react-router';
import { goToAdminHomePage } from '../routes/coordinator'

const useIsLogged = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user =  localStorage.getItem('user');

        if(user && token) {
            goToAdminHomePage(history)
        }
    }, [history])
}

export default useIsLogged