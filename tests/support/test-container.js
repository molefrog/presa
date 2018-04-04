import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../src/theme'

const TestContainer = ({ children }) => (
  <ThemeProvider theme={theme} children={children} />
)

export default TestContainer
