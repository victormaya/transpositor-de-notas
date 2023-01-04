import styled from 'styled-components'

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
`
export const ContainerGrid = styled.div`
  width: ${({ theme }) => theme.grid.container};
  min-height: 100vh;
  padding: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};
  margin-bottom: ${({ theme }) => theme.spacings.large};
`
export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.light};
  margin-top: ${({ theme }) => theme.spacings.medium};
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
`
export const Text = styled.p`
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  span {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`
export const NoteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

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

export const NoteButton = styled.button<{ typeButton: string }>`
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
`

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
`
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
`
