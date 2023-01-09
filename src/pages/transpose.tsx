import { useState } from 'react'

import { CalcButton } from 'components/CalcButton'
import { ContainerGrid } from 'components/ContainerGrid'
import { ContainerPage } from 'components/ContainerPage'
import { DefaultSection } from 'components/DefaultSection'
import { DisplayNumber } from 'components/DisplayNumber'
import Logo from 'components/Logo'
import { NoteButton } from 'components/NoteButton'
import { NoteButtonContainer } from 'components/NoteButtonContainer'
import { SpanText } from 'components/SpanText'
import { Text } from 'components/Text'
import { Title } from 'components/Title'
import { NextSeo } from 'next-seo'

export default function Transpose() {
  const notesList = [
    { note: 'C', minor: false },
    { note: 'C#', minor: false },
    { note: 'D', minor: false },
    { note: 'D#', minor: false },
    { note: 'E', minor: false },
    { note: 'F', minor: false },
    { note: 'F#', minor: false },
    { note: 'G', minor: false },
    { note: 'G#', minor: false },
    { note: 'A', minor: false },
    { note: 'A#', minor: false },
    { note: 'B', minor: false },
    { note: 'Cm', minor: true },
    { note: 'C#m', minor: true },
    { note: 'Dm', minor: true },
    { note: 'D#m', minor: true },
    { note: 'Em', minor: true },
    { note: 'Fm', minor: true },
    { note: 'F#m', minor: true },
    { note: 'Gm', minor: true },
    { note: 'G#m', minor: true },
    { note: 'Am', minor: true },
    { note: 'A#m', minor: true },
    { note: 'Bm', minor: true }
  ]

  const [selectedIndices, setSelectedIndices] = useState([])
  const [number, setNumber] = useState(0)
  const [transposeActive, setTransposeActive] = useState(false)

  function addOrRemoveNote(index: number) {
    if (selectedIndices.includes(index)) {
      const newSelectedIndices = selectedIndices
      const indexInSelectedIndices = newSelectedIndices.indexOf(index)
      newSelectedIndices.splice(indexInSelectedIndices, 1)
      setSelectedIndices([...newSelectedIndices])
    } else {
      setSelectedIndices([...selectedIndices, index])
    }
  }

  function changeNumber(action: string) {
    if (transposeActive === false) {
      setTransposeActive(true)
    }
    if (action === 'less') {
      const newNumber = number - 1
      setNumber(newNumber)
    } else if (action === 'plus') {
      const newNumber = number + 1
      setNumber(newNumber)
    }
  }

  function calcIndex(indice: number) {
    const newIndice = indice + number
    const action = newIndice >= 0 && newIndice > 11 ? 'plus' : 'less'
    if (indice <= 11) {
      if (action === 'plus') {
        const finalIndice = newIndice > 11 ? newIndice - 12 : newIndice
        return finalIndice
      } else if (action === 'less') {
        const finalIndice = newIndice < 0 ? newIndice + 12 : newIndice
        return finalIndice
      }
    } else {
      if (action === 'plus') {
        const finalIndice = newIndice > 23 ? newIndice - 12 : newIndice
        return finalIndice
      } else if (action === 'less') {
        const finalIndice = newIndice < 12 ? newIndice + 12 : newIndice
        return finalIndice
      }
    }
  }

  return (
    <>
      <NextSeo title="Transpositor de notas" />
      <ContainerPage>
        <ContainerGrid>
          <Logo />
          <Title>TRANSPOSITOR DE NOTAS</Title>
          <DefaultSection>
            <Text>Escolha as notas para transpor:</Text>
            <NoteButtonContainer>
              {notesList.map(
                (item, index) =>
                  !item.minor && (
                    <NoteButton
                      onClick={() => addOrRemoveNote(index)}
                      typeButton={
                        selectedIndices.includes(index) ? 'selected' : 'default'
                      }
                      key={item.note}
                    >
                      {item.note}
                    </NoteButton>
                  )
              )}
            </NoteButtonContainer>
            <NoteButtonContainer>
              {notesList.map(
                (item, index) =>
                  item.minor && (
                    <NoteButton
                      onClick={() => addOrRemoveNote(index)}
                      typeButton={
                        selectedIndices.includes(index) ? 'selected' : 'default'
                      }
                      key={item.note}
                    >
                      {item.note}
                    </NoteButton>
                  )
              )}
            </NoteButtonContainer>
          </DefaultSection>
          {selectedIndices.length > 0 && (
            <>
              <DefaultSection>
                <Text>Notas Selecionadas:</Text>
                <NoteButtonContainer>
                  {selectedIndices.map((indice) => (
                    <NoteButton typeButton="selected" key={indice}>
                      {notesList[indice].note}
                    </NoteButton>
                  ))}
                </NoteButtonContainer>
              </DefaultSection>
              <DefaultSection>
                <Text>Altere o tom para mais ou para menos.</Text>
                <SpanText>
                  Cada unidade adicionada ou subtraída corresponde a meio tom.
                </SpanText>
                <NoteButtonContainer>
                  <CalcButton
                    onClick={() => changeNumber('less')}
                    transparent={number <= -11}
                    disabled={number <= -11}
                  >
                    -
                  </CalcButton>
                  <DisplayNumber>{number}</DisplayNumber>
                  <CalcButton
                    onClick={() => changeNumber('plus')}
                    transparent={number === 11}
                    disabled={number >= 11}
                  >
                    +
                  </CalcButton>
                </NoteButtonContainer>
              </DefaultSection>
              {transposeActive && (
                <DefaultSection>
                  <Text>Notas transpostas:</Text>
                  <NoteButtonContainer>
                    {selectedIndices.map((indice) => (
                      <NoteButton typeButton="transposed" key={indice}>
                        {notesList[calcIndex(indice)].note}
                      </NoteButton>
                    ))}
                  </NoteButtonContainer>
                </DefaultSection>
              )}
            </>
          )}
        </ContainerGrid>
      </ContainerPage>
    </>
  )
}
