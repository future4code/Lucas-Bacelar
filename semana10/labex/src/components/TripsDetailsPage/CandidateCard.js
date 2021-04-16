const TripsContainer = ({ candidate, decide }) => {
  return (
    <div>
      <p>{candidate.name}</p>
      <p>{candidate.profession}</p>
      <p>{candidate.age}</p>
      <p>{candidate.country}</p>
      <p>{candidate.applicationText}</p>
      <button onClick={() => decide(candidate.id, true)}>Aprovar</button>
      <button onClick={() => decide(candidate.id, false)}>Reprovar</button>
    </div>
  );
};

export default TripsContainer;
