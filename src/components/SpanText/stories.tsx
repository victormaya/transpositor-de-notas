import { SpanText } from '.'

export default {
  title: 'SpanText',
  component: SpanText,
  args: {
    title: 'TRANSPOSITOR DE NOTAS'
  }
}

export const Default = (args: { title: string }) => (
  <SpanText>{args.title}</SpanText>
)
