import styled from 'styled-components'

export const NoteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`
