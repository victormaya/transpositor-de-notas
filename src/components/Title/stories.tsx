import { Title } from '.'

export default {
  title: 'Title',
  component: Title,
  args: {
    title: 'TRANSPOSITOR DE NOTAS'
  }
}

export const Default = (args: { title: string }) => <Title>{args.title}</Title>
