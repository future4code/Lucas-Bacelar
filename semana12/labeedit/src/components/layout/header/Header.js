import logo from 'assets/Logo.png';
import { HeaderContainer, Button } from './styledHeader';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="site logo" />
      <div>
        <Button>Login</Button>
        <Button>Cadastro</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
