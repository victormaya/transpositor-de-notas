import styled from 'styled-components'

export const SpanText = styled.span`
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.large};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`
