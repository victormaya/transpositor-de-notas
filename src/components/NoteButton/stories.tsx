import { NoteButton } from '.'
import { INoteButton } from './types'

export default {
  title: 'NoteButton',
  component: NoteButton,
  args: {
    text: 'C#m',
    typeButton: 'transposed'
  }
}

export const Default = (args: INoteButton & { text: string }) => (
  <NoteButton typeButton={args.typeButton}>{args.text}</NoteButton>
)
