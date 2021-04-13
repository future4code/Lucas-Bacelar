const Select = ({ value, handleValue, options }) => {
    return (
        <select value={value} onChange={handleValue}>
            {options.map((option) =>  {
                return  <option value={option}>{option}</option>
            })}
        </select>
    )
}

export default Select