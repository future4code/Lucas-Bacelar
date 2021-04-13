const Input = ({ value, handleValue, placeholder }) => {
    return (
        <input 
            value={value}
            onChange={handleValue}
            placeholder={placeholder}
        />
    )
}

export default Input