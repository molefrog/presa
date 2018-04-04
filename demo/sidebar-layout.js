import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const SidebarLayout = props => {
  const proportion = props.proportion || '4/5'
  let [left, right] = proportion.split('/')

  const isRight = props.position === 'right'

  const leftRatio = 100.0 * left / (left + right)
  const rightRatio = 100.0 * left / (left + right)

  return (
    <Container>
      <Side
        isRight={isRight}
        percentage={leftRatio}
        weight={left}
        background={props.src}
      />
      <Content percentage={rightRatio} weight={right}>
        {props.children}
      </Content>
    </Container>
  )
}

const Side = styled.div`
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;

  flex-grow: ${props => props.weight};
  flex-basis: ${props => props.percentage}%;

  order: ${props => (props.isRight ? 2 : 0)};
`

const Content = styled.div`
  padding: 2.5em 3em;

  flex-grow: ${props => props.weight};
  flex-basis: ${props => props.percentage}%;
`

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
`

export default SidebarLayout
