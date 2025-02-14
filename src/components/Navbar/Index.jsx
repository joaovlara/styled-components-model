import React from 'react';
import { NavBarStack } from './styles.navbar';
import Button from '../Buttons/Index';
import { ButtonDefault } from '../Buttons/styles.button';

const NavBarBtn = () => {
  return (
    <NavBarStack>
      <button>VOLTAR ou Avatar</button>
      <ButtonDefault variant="primary">Primary</ButtonDefault>
      <ButtonDefault variant="outline" borderColor="white">Outline</ButtonDefault>
      <ButtonDefault variant="ghost" color="red">Ghost</ButtonDefault>
    </NavBarStack>
  )
}

export default NavBarBtn