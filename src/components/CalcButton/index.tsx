import styled from 'styled-components'

export const CalcButton = styled.button<{ transparent: boolean }>`
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.transparent ? 0 : 1)};
  width: 50px;
  height: 50px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
