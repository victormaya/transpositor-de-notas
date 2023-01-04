import { useState } from 'react'

import LogoLarge from 'assets/svgs/LogoLarge'
import { NextSeo } from 'next-seo'
import * as S from 'styles/styles'

export default function Home() {
  const notesList = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
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
    const action = newIndice >= 0 ? 'plus' : 'less'
    if (action === 'plus') {
      const finalIndice = newIndice > 11 ? newIndice - 12 : newIndice
      return finalIndice
    } else if (action === 'less') {
      const finalIndice = newIndice < 0 ? newIndice + 12 : newIndice
      return finalIndice
    }
  }

  return (
    <>
      <NextSeo title="Transpositor de notas" />
      <S.ContainerPage>
        <S.ContainerGrid>
          <LogoLarge />
          <S.Title>TRANSPOSITOR DE NOTAS</S.Title>
          <S.Section>
            <S.Text>Escolha as notas para transpor:</S.Text>
            <S.NoteButtonContainer>
              {notesList.map((note, index) => (
                <S.NoteButton
                  onClick={() => addOrRemoveNote(index)}
                  typeButton={
                    selectedIndices.includes(index) ? 'selected' : 'default'
                  }
                  key={note}
                >
                  {note}
                </S.NoteButton>
              ))}
            </S.NoteButtonContainer>
          </S.Section>
          {selectedIndices.length > 0 && (
            <>
              <S.Section>
                <S.Text>Notas Selecionadas:</S.Text>
                <S.NoteButtonContainer>
                  {selectedIndices.map((indice) => (
                    <S.NoteButton typeButton="selected" key={indice}>
                      {notesList[indice]}
                    </S.NoteButton>
                  ))}
                </S.NoteButtonContainer>
              </S.Section>
              <S.Section>
                <S.Text>
                  Altere o tom para mais ou para menos.
                  <span>
                    <br />
                    Cada unidade adicionada ou subtraída corresponde a meio tom
                  </span>
                </S.Text>
                <S.NoteButtonContainer>
                  <S.CalcButton
                    onClick={() => changeNumber('less')}
                    transparent={number <= -11}
                    disabled={number <= -11}
                  >
                    -
                  </S.CalcButton>
                  <S.DisplayNumber>{number}</S.DisplayNumber>
                  <S.CalcButton
                    onClick={() => changeNumber('plus')}
                    transparent={number === 11}
                    disabled={number >= 11}
                  >
                    +
                  </S.CalcButton>
                </S.NoteButtonContainer>
              </S.Section>
              {transposeActive && (
                <S.Section>
                  <S.Text>Notas transpostas:</S.Text>
                  <S.NoteButtonContainer>
                    {selectedIndices.map((indice) => (
                      <S.NoteButton typeButton="transposed" key={indice}>
                        {notesList[calcIndex(indice)]}
                      </S.NoteButton>
                    ))}
                  </S.NoteButtonContainer>
                </S.Section>
              )}
            </>
          )}
        </S.ContainerGrid>
      </S.ContainerPage>
    </>
  )
}
