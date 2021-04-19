import * as api from '../../utils/labexAPI';
import styled from 'styled-components';
import CandidateCard from '../../components/TripsDetailsPage/CandidateCard';

const CandidatesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 30px;
`;

const Candidates = ({ candidates, id, refresh }) => {
  console.log(candidates);
  const decideCandidateAux = (candidateId, approve) => {
    api.decideCandidate(id, candidateId, approve).then((res) => {
      refresh();
    });
  };

  return (
    <CandidatesContainer>
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          decide={decideCandidateAux}
        />
      ))}
    </CandidatesContainer>
  );
};

export default Candidates;
