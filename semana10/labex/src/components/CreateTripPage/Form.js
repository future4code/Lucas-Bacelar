import { useState } from 'react';
import styled from 'styled-components';
import * as api from '../../utils/labexAPI';
import { Input, Select, Button } from '../index';
import { useForm, useDate } from '../../hooks/index';

const FormContainer = styled.form`
  height: 500px;
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
    font-size: 1rem;
    color: white;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div:nth-of-type(4) {
    flex: 2.5;
    display: flex;
    flex-direction: column;

    & > textarea {
      flex: 1;
      padding: 10px;
      resize: none;
    }
  }

  & > button {
    flex: 2;
    font-size: 2rem;
    width: 60%;
    align-self: center;
  }
`;

const Form = () => {
  const [date] = useState(useDate());
  const [form, handleInputChange, resetForm] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 50,
  });

  const planets = [
    'Mercurio',
    'Venus',
    'Terra',
    'Marte',
    'Jupiter',
    'Saturno',
    'Urano',
    'Netuno',
  ];

  const submitForm = (e) => {
    e.preventDefault();
    api.createTrip(form);
    resetForm();
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <div>
        <label>Nome</label>
        <Input
          name="name"
          value={form.name}
          handleValue={handleInputChange}
          placeholder="Nome"
          title="O nome deve conter no minimo 3 letras"
          pattern={'[a-zA-Z]{3,}'}
        />
      </div>
      <div>
        <label>Planeta</label>
        <Select
          name="planet"
          value={form.planet}
          handleValue={handleInputChange}
          options={planets}
          placeholder="Escolha um planeta"
        />
      </div>
      <div>
        <label>Data</label>
        <Input
          name="date"
          value={form.date}
          handleValue={handleInputChange}
          type="date"
          min={date ? date : ''}
        />
      </div>
      <div>
        <label>Descriçao</label>
        <textarea
          name="description"
          value={form.description}
          handleValue={handleInputChange}
          placeholder="Descrição"
          minlength="30"
        ></textarea>
      </div>
      <div>
        <label>Duração em dias</label>
        <Input
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          handleValue={handleInputChange}
          min="50"
          placeholder="Duração em dias"
        />
      </div>
      <Button type="submit" text="Enviar" color="ok" />
    </FormContainer>
  );
};

export default Form;
