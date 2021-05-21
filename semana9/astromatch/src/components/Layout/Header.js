import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:  center;
  padding: 0 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2)
`;

export default function Header({changepage}) {
  return (
    <HeaderContainer>
      <div></div>
      <h1>Astromatch</h1>
      <button onClick={changepage}>Mudar</button>
    </HeaderContainer>
  );
}
