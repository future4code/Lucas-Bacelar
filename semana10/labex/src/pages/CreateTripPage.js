import useAuthenticate from '../hooks/useAuthenticate'

const CreateTripPage = () => {
    useAuthenticate();
    return (
        <div>CreateTripPage</div>
    )
}

export default CreateTripPage