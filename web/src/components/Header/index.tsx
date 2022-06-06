import { useFetchUser } from '../../utils/hooks/useFetchUser';

import {
  AiOutlineUserAdd,
  AiOutlineBars,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

import Logo from '../../assets/logo.png';
import * as S from './styles';

export function Header() {
  const { user } = useFetchUser();

  const handleAuthDiscord = async () => {
    window.location.href = 'http://localhost:3001/api/auth/login';
  };

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  return (
    <S.Header>
      <S.SpaceDiv />
      <S.HeaderLogoWrapper>
        <S.HeaderLogo src={Logo} alt="Logo" />
      </S.HeaderLogoWrapper>
      <S.Menu>
        <S.MenuList>
          <S.MenuItem>
            <a href="/">Menu 1</a>
          </S.MenuItem>
          <S.MenuItem>
            <a href="/">Menu 2</a>
          </S.MenuItem>
          <S.MenuItem>
            <a href="/">Menu 3</a>
          </S.MenuItem>
        </S.MenuList>
        <S.HeaderOptions>
          <span>
            {user ? (
              user?.username
            ) : (
              <AiOutlineUserAdd size={24} onClick={handleAuthDiscord} />
            )}
          </span>
          <span>
            <AiOutlineBars size={24} />
          </span>
          <span>
            <AiOutlineShoppingCart size={24} onClick={() => openDrawer()} />
          </span>
        </S.HeaderOptions>
      </S.Menu>
    </S.Header>
  );
}
