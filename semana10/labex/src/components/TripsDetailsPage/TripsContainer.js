import * as api from '../../utils/labexAPI';
import CandidateCard from '../../components/TripsDetailsPage/CandidateCard';

const TripsContainer = ({ candidates, approved, id, refresh, ...details }) => {
  console.log(candidates);
  console.log(approved);

  const decideCandidateAux = (candidateId, approve) => {
    api.decideCandidate(id, candidateId, approve).then((res) => {
      refresh();
    });
  };

  return (
    <div>
      <h2>Details</h2>
      {Object.keys(details).map((e) => (
        <p>
          <strong>{e}</strong> - {details[e]}
        </p>
      ))}

      <h2>Approved</h2>
      {approved.map((item) => (
        <p>{item.name}</p>
      ))}

      <h2>Candidates</h2>
      {candidates.map((candidate) => (
        <CandidateCard candidate={candidate} decide={decideCandidateAux} />
      ))}
    </div>
  );
};

export default TripsContainer;
