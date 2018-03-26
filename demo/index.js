import { Presentation, Slide } from '../src'
import { H1, H2, H3 } from '../src/blocks'

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Presentation>
    <Slide centered>
      <H1>Presa</H1>
      <H3>Create presentations in React with joy!</H3>
    </Slide>
  </Presentation>,
  document.getElementById('container')
)
