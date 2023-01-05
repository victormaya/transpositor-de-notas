import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import * as NextImage from "next/image";


Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest } = props
    return <img {...rest} />
  }
})


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script:wght@400;500;600;700&display=swap');
      </style>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
