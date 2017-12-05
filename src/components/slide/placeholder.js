import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Presa } from '../../assets/icons'

/*
 * This component will be used inside slides that are
 * not loaded yet.
 */
const Placeholder = props => (
  <Container>
    <Presa width="10%" height={null} />
  </Container>
)

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
