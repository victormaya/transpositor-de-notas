import { Text } from '.'

export default {
  title: 'Text',
  component: Text,
  args: {
    title: 'TRANSPOSITOR DE NOTAS'
  }
}

export const Default = (args: { title: string }) => <Text>{args.title}</Text>
