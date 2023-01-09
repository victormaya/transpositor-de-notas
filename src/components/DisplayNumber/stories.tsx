import { DisplayNumber } from '.'

export default {
  title: 'DisplayNumber',
  component: DisplayNumber,
  args: {
    text: 0
  }
}

export const Default = (args: { text: string }) => (
  <DisplayNumber>{args.text}</DisplayNumber>
)
