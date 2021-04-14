import { useHistory } from "react-router"
import { goToAdminHomePage } from '../routes/coordinator'
import Input from '../components/Input'
import useInput from '../hooks/useInput'
import useIsLogged from '../hooks/useIsLogged'
import * as api from '../utils/labexAPI'

const LoginPage = () => {
    useIsLogged();
    const history = useHistory();
    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();

    const onClickLogin = () => {
        const body = {
            email,
            password
        }
        api.login(body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            goToAdminHomePage(history);
        }).catch((err) => {
            alert("Ocorreu um erro talvez essa conta não exista")
        })
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <form>
                <Input value={email} handleValue={handleEmail} placeholder="email"/>
                <Input value={password} handleValue={handlePassword} placeholder="password"/>
            </form>
            <button onClick={onClickLogin}>Login</button>
            <button onClick={() => history.goBack()}>Voltar</button>
        </div>
    )
}

export default LoginPage