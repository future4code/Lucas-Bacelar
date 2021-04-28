import logo from 'assets/Logo.png';
import { HeaderContainer, Button } from './styledHeader';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="site logo" />
      <div>
        <Link to="/">
          <Button>Log In</Button>
        </Link>

        <Link to="/registro">
          <Button>Cadastro</Button>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
