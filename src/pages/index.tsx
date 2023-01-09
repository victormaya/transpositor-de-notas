import { ContainerGrid } from 'components/ContainerGrid'
import { ContainerPage } from 'components/ContainerPage'
import { NextSeo } from 'next-seo'

export default function Home() {
  const teste = async () => {
    fetch('https://www.youtube.com/results?search_query=popomatheusfernandes')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  teste()
  return (
    <>
      <NextSeo title="Removedor de voz" />
      <ContainerPage>
        <ContainerGrid></ContainerGrid>
      </ContainerPage>
    </>
  )
}
