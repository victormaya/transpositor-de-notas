import { create } from '@storybook/theming'
import theme from '../src/styles/theme'

export default create({
  base: 'dark',
  colorSecondary: theme.colors.dark,

  brandTitle: 'Boilerplate',
  brandUrl: 'https://alquipo.dev/',
})
