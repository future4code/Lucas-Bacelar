import logo from 'assets/Logo.png';
import { HeaderContainer, Button } from './styledHeader';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GlobalStateContext from '../../../global/GlobalStateContext';

const Header = ({ isLogged }) => {
  const { userData, logout } = useContext(GlobalStateContext);

  if (!isLogged) {
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
  } else {
    return (
      <HeaderContainer>
        <img src={logo} alt="site logo" />
        <div>
          <h3>{userData.username}</h3>

          <Button onClick={logout}>Logout</Button>
        </div>
      </HeaderContainer>
    );
  }
};

export default Header;
