import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.light};
  margin-top: ${({ theme }) => theme.spacings.medium};
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    margin-bottom: ${({ theme }) => theme.spacings.large};
  }
`
