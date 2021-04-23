import styled from 'styled-components';
import { Input, Select, Button } from '../../components/index';
import { useForm } from '../../hooks/index';
import * as api from '../../utils/labexAPI';

const FormContainer = styled.form`
  height: 520px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  select {
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 1.25rem;
    flex: 1;
  }

  label {
    color: white;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div:nth-of-type(6) {
    flex: 2.5;
    display: flex;
    flex-direction: column;

    & > input {
      flex: 1;
      padding: 10px;
    }
  }

  & > button {
    flex: 2;
    font-size: 2rem;
    width: 60%;
    align-self: center;
  }
`;

const Form = ({ history, trips, countries }) => {
  const [form, handleInputChange, resetForm] = useForm({
    trip: '',
    name: '',
    age: 18,
    applicationText: '',
    profession: '',
    country: '',
  });

  const onSubmit = (e) => {
    const { trip, ...body } = form;
    e.preventDefault();

    api.applyToTrip(trip, body).then((res) => {
      resetForm();
      alert(res);
    });
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <div>
        <label>Viagem</label>
        <select
          name="trip"
          value={form.trip}
          onChange={handleInputChange}
          required
        >
          <option value="" defaultValue disable>
            Escolha uma viagem
          </option>
          {trips.map((trip) => {
            return (
              <option value={trip.id}>{`${trip.name} - ${trip.planet}`}</option>
            );
          })}
        </select>
      </div>
      <div>
        <label>Nome</label>
        <Input
          name="name"
          value={form.name}
          handleValue={handleInputChange}
          placeholder="Nome"
          pattern="^[a-zA-Z\s\.]{3,}$"
          required
        />
      </div>
      <div>
        <label>Idade</label>
        <Input
          name="age"
          value={form.age}
          handleValue={handleInputChange}
          placeholder="Idade"
          type="number"
          min="18"
          required
        />
      </div>
      <div>
        <label>Profissão</label>
        <Input
          name="profession"
          value={form.profession}
          handleValue={handleInputChange}
          placeholder="Profissão"
          pattern={'^.{10,}'}
          required
        />
      </div>
      <div>
        <label>Pais</label>
        <Select
          name="country"
          value={form.country}
          handleValue={handleInputChange}
          placeholder="Escolha um pais"
          options={countries ? countries : []}
          required
        />
      </div>
      <div>
        <label>Texto candidatura</label>
        <input
          name="applicationText"
          type="text"
          value={form.applicationText}
          onChange={handleInputChange}
          placeholder="Texto de candidatura"
          pattern="^[a-zA-Z\s\.]{30,}$"
          required
        />
      </div>
      <Button type="submit" text="Enviar" color="ok" />
    </FormContainer>
  );
};

export default Form;
