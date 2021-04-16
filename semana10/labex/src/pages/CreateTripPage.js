import { useAuthenticate, useForm, useDate } from "../hooks/index";
import { Input, Select } from "../components/index";
import { goToAdminHomePage } from "../routes/coordinator";
import { useState } from "react";
import { useHistory } from "react-router"
import * as api from '../utils/labexAPI'

const CreateTripPage = () => {
  useAuthenticate();
  const history = useHistory();
  const [date] = useState(useDate())
  const [form, handleInputChange, resetForm] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 50,
  });

  const planets = ['Mercurio', 'Venus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Netuno'];

  const submitForm = (e) => {
    e.preventDefault();
    api.createTrip(form);
    resetForm()
  };

  return (
    <div>
      <h1>Criar viagem</h1>
      <form onSubmit={submitForm}>
        <Input
          name="name"
          value={form.name}
          handleValue={handleInputChange}
          placeholder="Nome"
          title="O nome deve conter no minimo 3 letras"
          pattern={'[a-zA-Z]{3,}'}
        />
        <Select
          name="planet"
          value={form.planet}
          handleValue={handleInputChange}
          options={planets}
          placeholder="Escolha um planeta"
        />
        <Input
          name="date"
          value={form.date}
          handleValue={handleInputChange}
          type="date"
          min={date ? date : ''}
        />
        <Input
          name="description"
          value={form.description}
          handleValue={handleInputChange}
          placeholder="Descrição"
          pattern={'^.{30,}'}
        />
        <Input
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          handleValue={handleInputChange}
          min="50"
          placeholder="Duração em dias"
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={() => goToAdminHomePage(history)}>Voltar</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
