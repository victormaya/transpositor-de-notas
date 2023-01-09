import styled from 'styled-components'

import { INoteButton } from './types'

const selectBg = {
  default: 'gray',
  selected: 'green',
  transposed: 'light'
}

const selectColor = {
  default: 'dark',
  selected: 'light',
  transposed: 'dark'
}

export const NoteButton = styled.button<INoteButton>`
  width: 50px;
  height: 50px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  background: ${(props) => props.theme.colors[selectBg[props.typeButton]]};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  color: ${(props) => props.theme.colors[selectColor[props.typeButton]]};
  :hover {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.light};
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`
