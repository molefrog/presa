import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const SidebarLayout = props => (
  <Container>
    <Side background={props.src} />
    <Content>{props.children}</Content>
  </Container>
)

const Side = styled.div`
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  flex: 3 1;
`

const Content = styled.div`
  flex: 4 1;
  padding: 3em;
`

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

export default SidebarLayout
