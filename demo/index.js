import { Presentation, Slide, Fragment } from '../src'
import { H1, H2, H3 } from '../src/blocks'

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Presentation>
    <Slide centered>
      <H1>Presa</H1>
      <H3>Create presentations in React with joy!</H3>
      <Fragment index={0}><H3>JUST</H3></Fragment>
      <Fragment index={1}><H2>DO</H2></Fragment>
      <Fragment index={2}><H1>IT!</H1></Fragment>
    </Slide>
    <Slide centered>
      <H1>Nex Slide</H1>
      <Fragment index={2}><H2>Last Fragment</H2></Fragment>
      <Fragment index={1}><H2>Now you will see...</H2></Fragment>
      <Fragment index={0}><H2>LOOK HERE ↑</H2></Fragment>
    </Slide>
  </Presentation>,
  document.getElementById('container')
)
