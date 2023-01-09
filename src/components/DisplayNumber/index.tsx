import styled from 'styled-components'

export const DisplayNumber = styled.p`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`
