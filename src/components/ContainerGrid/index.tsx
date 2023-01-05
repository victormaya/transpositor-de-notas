import styled from 'styled-components';

export const ContainerGrid = styled.div`
  width: ${({ theme }) => theme.grid.container};
  min-height: 100vh;
  padding: 90px 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
