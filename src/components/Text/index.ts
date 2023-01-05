import styled from 'styled-components'

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;
