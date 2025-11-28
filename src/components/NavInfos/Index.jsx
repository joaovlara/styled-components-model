import React from 'react';
import { NavBarStack } from '@/components/NavInfos/styles.navinfos';
import { TagText } from '@/styles/styles.text';

const NavInfos = () => {
  return (
    <NavBarStack>
      <TagText color={(props) => props.theme.colors.brown}>Desenvolvedor Front-End</TagText>
      <TagText color={(props) => props.theme.colors.accent}>Curitiba - Paraná, Brasil</TagText>
    </NavBarStack>
  )
}

export default NavInfos