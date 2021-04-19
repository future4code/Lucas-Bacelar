const Input = ({
  name,
  value,
  handleValue,
  min,
  max,
  placeholder,
  title,
  pattern,
  type = 'text',
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={handleValue}
      placeholder={placeholder}
      type={type}
      required
      title={title}
      min={min}
      max={max}
      pattern={pattern}
    />
  );
};

export default Input;
