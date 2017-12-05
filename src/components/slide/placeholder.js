import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { Presa } from '../../assets/icons'

const bouncing = keyframes`
  0% { transform: none; }
  25% { transform: translateY(-6px); }
  95% { transform: translateY(2px); }
  100% { transform: none; }
`

/*
 * This component will be used inside slides that are
 * not loaded yet.
 */
const Placeholder = props => (
  <Container>
    <Icon width="10%" height={null} />
  </Container>
)

const Icon = styled(Presa)`
  will-change: transform;
  animation: ${bouncing} 1.4s infinite;
`

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  path {
    stroke: ${props => props.theme.placeholderColor};
  }
`

export default Placeholder
