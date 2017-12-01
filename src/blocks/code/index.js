import React from 'react'
import codeFactory from './code'

const warning =
  'The `Code` component relies on `react-syntax-highlighter` ' +
  'package. Please install it via the package manager.'

// Use warning as a fallback
let Code = () => React.createElement('code', null, warning)

try {
  const highlight = require('react-syntax-highlighter/prism')
  Code = codeFactory(highlight.default)
} catch (_) {
  // show additional warning in the console
  console.warn(warning)
}

export default Code
