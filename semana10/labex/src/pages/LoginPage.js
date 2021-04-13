import { useHistory } from "react-router"

const LoginPage = () => {
    const history = useHistory();

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => history.goBack()}>Voltar</button>
        </div>
    )
}

export default LoginPage