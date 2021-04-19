import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;

  & > div {
    background: #494f81;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    & > img {
      width: 281px;
    }
  }

  & > button {
    font-size: 2rem;
    font-weight: 700;
    align-self: center;
    padding: 20px 20px;
    background: #6565ee;
    color: white;
    border-radius: 12px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

const PageCard = ({ goto, img, btnName }) => {
  return (
    <Card>
      <div>
        <img src={img} alt="rocket img" />
      </div>
      <button onClick={goto}>{btnName}</button>
    </Card>
  );
};

export default PageCard;
