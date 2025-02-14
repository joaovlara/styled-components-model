import React from 'react';
import { NavBarStack } from './styles.navinfos';
import { TagText } from '../Text/styles.text';

const NavInfos = () => {
  return (
    <NavBarStack>
      <TagText color={(props) => props.theme.colors.brown}>Texto Aqui</TagText>
      <TagText color={(props) => props.theme.colors.accent}>Texto Aqui</TagText>
    </NavBarStack>
  )
}

export default NavInfos