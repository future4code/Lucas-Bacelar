import { useHistory } from "react-router";
import { Input, Select } from "../components/index";
import { useForm } from "../hooks/index";
import * as api from '../utils/labexAPI'
import getCountries from '../utils/restCountriesAPI'
import { useEffect, useState } from "react";


const ApplicationFormPage = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [countries, setCountries] = useState([]);

  const [form, handleInputChange] = useForm({
    trip: "",
    name: "",
    age: 18,
    applicationText: "",
    profession: "",
    country: "",
  });

  useEffect(() => {
    api.getTrips()
    .then((res) => {
      setTrips(res)
    })

   getCountries()
   .then((res) => {
     setCountries(res.map((country) => country.name))
   })
}, []);

  const onSubmit = (e) => {
    const { trip, ...body } = form;
    console.log("trip:",trip)
    console.log("body:",body)

    api.applyToTrip(trip, body)

    e.preventDefault();
  };

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={onSubmit}>
        <select name="trip" value={form.trip} onChange={handleInputChange} required>
          <option value="" defaultValue disable>Escolha uma viagem</option>
          {trips.map((trip) => {
            return <option value={trip.id} >{`${trip.name} - ${trip.planet}`}</option>
          })}
        </select>
        <Input
          name="name"
          value={form.name}
          handleValue={handleInputChange}
          placeholder="Nome"
          pattern={"^[a-zA-Z]{3,}"}
        />
        <Input
          name="age"
          value={form.age}
          handleValue={handleInputChange}
          placeholder="Idade"
          type="number"
          min="18"
        />
        <Input
          name="applicationText"
          value={form.applicationText}
          handleValue={handleInputChange}
          placeholder="Texto de candidatura"
          pattern={"^.{30,}"}
        />
        <Input
          name="profession"
          value={form.profession}
          handleValue={handleInputChange}
          placeholder="Profissão"
          pattern={"^.{10,}"}
        />
        <Select
          name="country"
          value={form.country}
          handleValue={handleInputChange}
          placeholder="Escolha um pais"
          options={countries ? countries : []}
        />
        <button type="button" onClick={() => history.goBack()}>Voltar</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
