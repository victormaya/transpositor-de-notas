import { useState } from 'react'

import LogoLarge from 'assets/svgs/LogoLarge'
import { NextSeo } from 'next-seo'
import * as S from 'styles/styles'

export default function Home() {
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
      <S.ContainerPage>
        <S.ContainerGrid>
          <div className="logo">
            <LogoLarge />
          </div>
          <S.Title>TRANSPOSITOR DE NOTAS</S.Title>
          <S.Section>
            <S.Text>Escolha as notas para transpor:</S.Text>
            <S.NoteButtonContainer>
              {notesList.map(
                (item, index) =>
                  !item.minor && (
                    <S.NoteButton
                      onClick={() => addOrRemoveNote(index)}
                      typeButton={
                        selectedIndices.includes(index) ? 'selected' : 'default'
                      }
                      key={item.note}
                    >
                      {item.note}
                    </S.NoteButton>
                  )
              )}
            </S.NoteButtonContainer>
            <S.NoteButtonContainer>
              {notesList.map(
                (item, index) =>
                  item.minor && (
                    <S.NoteButton
                      onClick={() => addOrRemoveNote(index)}
                      typeButton={
                        selectedIndices.includes(index) ? 'selected' : 'default'
                      }
                      key={item.note}
                    >
                      {item.note}
                    </S.NoteButton>
                  )
              )}
            </S.NoteButtonContainer>
          </S.Section>
          {selectedIndices.length > 0 && (
            <>
              <S.Section>
                <S.Text>Notas Selecionadas:</S.Text>
                <S.NoteButtonContainer>
                  {selectedIndices.map((indice) => (
                    <S.NoteButton typeButton="selected" key={indice}>
                      {notesList[indice].note}
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
                        {notesList[calcIndex(indice)].note}
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
