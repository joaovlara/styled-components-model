import React from 'react';
import { NavBarStack } from './styles.navbar';
import { ButtonDefault } from '../Buttons/styles.button';

const NavBarBtn = () => {
  return (
    <NavBarStack>
      <button>VOLTAR ou Avatar</button>
      <ButtonDefault variant="primary" borderColor="white">Primary</ButtonDefault>
      <ButtonDefault variant="primary" borderColor="white">Primary</ButtonDefault>
      <ButtonDefault variant="primary" borderColor="white">Primary</ButtonDefault>
    </NavBarStack>
  )
}

export default NavBarBtn