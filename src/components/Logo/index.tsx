import React from 'react'

import LogoLarge from 'assets/svgs/LogoLarge'

import * as S from './styles';

const Logo: React.FC = () => {
  return (
    <S.WrapperLogo>
      <LogoLarge />
    </S.WrapperLogo>
  )
}

export default Logo
