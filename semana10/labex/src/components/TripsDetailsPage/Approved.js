import styled from 'styled-components';

const ApprovedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: white;
  background: linear-gradient(
    to bottom,
    rgba(154, 131, 217, 0.82),
    rgba(124, 77, 255, 0.1)
  );

  & > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 10px;
    height: 80px;
    background: rgba(77, 186, 101, 0.6);
  }

  & > p {
    font-weight: 500;
    padding: 20px 15px;
    margin: 0 30px;
    font-size: 1.75rem;
    text-align: center;
    background: rgba(176, 153, 242, 0.5);
    word-wrap: break-word;
  }
`;

const Approved = ({ approved }) => {
  return (
    <ApprovedContainer>
      <h1>Aprovados</h1>
      {approved.map((item) => (
        <p>{item.name}</p>
      ))}
    </ApprovedContainer>
  );
};

export default Approved;
