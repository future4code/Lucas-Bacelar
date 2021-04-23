import { useParams, useHistory } from 'react-router';
import styled from 'styled-components';
import { goToAdminHomePage } from '../routes/coordinator';
import useAuthenticate from '../hooks/useAuthenticate';
import { useState, useEffect } from 'react';
import * as api from '../utils/labexAPI';
import {
  Approved,
  TripDetails,
  Candidates,
} from '../components/TripsDetailsPage/index';

const PageContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(200px, 3fr) 8fr;
`;

const TripInfo = styled.div`
  display: grid;
  grid-template-rows: minmax(250px, 500px) 1fr;
`;

const TripDetailsPage = () => {
  useAuthenticate();
  const history = useHistory();
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { candidates, approved, ...details } = tripDetails;

  console.log(tripDetails);

  const getTripDetailsAux = () => {
    setLoading(true);
    api.getTripDetails(id).then(async (res) => {
      await setTripDetails(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTripDetailsAux();
  }, []);

  return (
    <PageContainer>
      {!loading ? <Approved approved={approved} /> : <div>Loading</div>}
      <TripInfo>
        <div>
          {!loading ? (
            <TripDetails
              details={details}
              goback={() => goToAdminHomePage(history)}
            />
          ) : (
            <div>Loading</div>
          )}
        </div>
        {!loading ? (
          <Candidates
            candidates={candidates}
            id={id}
            refresh={getTripDetailsAux}
          />
        ) : (
          <div>Loading</div>
        )}
      </TripInfo>
    </PageContainer>
  );
};

export default TripDetailsPage;
