import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBarStack } from './styles.navbar';
import { ButtonDefault } from '../Buttons/styles.button';
import { theme } from '@/theme/theme';

const NavBarBtn = ({ navColor = theme.colors.teal }) => {
  const location = useLocation();
  return (
    <NavBarStack style={{ borderColor: navColor, borderStyle: 'solid', borderWidth: '0 0 4px 0' }}>
      <Link to="/" className="nav-back">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="20,6 8,16 20,26" fill={theme.colors.light} />
        </svg>
      </Link>
      <div className="nav-links">
        <Link to="/About">
          <ButtonDefault
            variant="outline"
            borderColor={location.pathname === "/About" ? navColor : theme.colors.light}
            color={theme.colors.light}
            $active={location.pathname === "/About"}
          >Sobre</ButtonDefault>
        </Link>
        <Link to="/Projects">
          <ButtonDefault
            variant="outline"
            borderColor={location.pathname === "/Projects" ? navColor : theme.colors.light}
            color={theme.colors.light}
            $active={location.pathname === "/Projects"}
          >Projetos</ButtonDefault>
        </Link>
        <Link to="/Contact">
          <ButtonDefault
            variant="outline"
            borderColor={location.pathname === "/Contact" ? navColor : theme.colors.light}
            color={theme.colors.light}
            $active={location.pathname === "/Contact"}
          >Contato</ButtonDefault>
        </Link>
      </div>
    </NavBarStack>
  )
}

export default NavBarBtn