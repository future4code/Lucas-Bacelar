const Select = ({ name, value, handleValue, placeholder, options }) => {
    return (
        <select required name={name} value={value} onChange={handleValue}>
            <option key={Date.now()} value="" defaultValue disabled>{placeholder}</option>
            {options.map((option) =>  {
                return  <option key={option} value={option}>{option}</option>
            })}
        </select>
    )
}

export default Select