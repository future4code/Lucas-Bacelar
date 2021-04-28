import styled from 'styled-components';

const StyledInput = styled.input`
  width: 280px;
  height: 50px;
  border-radius: 4px;
  background: var(--form-background);
  border: 1px solid var(--border);

  &::placeholder {
    text-align: center;
  }
`;

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChangeValue,
  pattern,
  title,
}) => {
  let message, validation;
  if (type === 'email') {
    message = 'Digite um email válido ex: random@random.com';
    validation = '.+@.+.com';
  }
  return (
    <>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
        pattern={validation ? validation : pattern}
        title={message ? message : title}
        required
      />
    </>
  );
};

export default Input;
