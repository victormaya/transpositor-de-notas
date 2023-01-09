import { CalcButton } from '.'
import { ICalcButton } from './types'

export default {
  title: 'CalcButton',
  component: CalcButton,
  args: {
    text: '+',
    transparent: false
  }
}

export const Default = (args: ICalcButton & { text: string }) => (
  <CalcButton transparent={args.transparent}>{args.text}</CalcButton>
)
