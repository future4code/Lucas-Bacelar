import { useAuthenticate, useForm } from "../hooks/index";
import { Input, Select } from "../components/index";
import { goToAdminHomePage } from "../routes/coordinator";
import { useEffect, useState } from "react";
import { useHistory } from "react-router"

const CreateTripPage = () => {
  useAuthenticate();
  const history = useHistory();
  const [date, setDate] = useState('')
  const [form, handleInputChange, resetForm] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    duration: "",
  });
  const planets = ['Mercurio', 'Venus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Netuno'];
  
  useEffect(() => {
      const now = new Date()
      const day = (String(now.getDate() + 1)).padStart(2, 0);
      const month = (String(now.getMonth() + 1)).padStart(2, 0);
      const year = (String(now.getFullYear()));
      setDate(`${year}-${month}-${day}`)
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
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
          name="duration"
          value={form.duration}
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
