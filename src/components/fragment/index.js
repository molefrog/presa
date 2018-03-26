import React from 'react'
import { FragmentConsumer } from '../slide/context'
import styled from 'styled-components'

class Fragment extends React.Component {
  render() {
    const { children, index } = this.props

    return (
      <FragmentConsumer>
        {fragmentIndex => <SlideName hidden={index > fragmentIndex}>{children}</SlideName>}
      </FragmentConsumer>
    )
  }
}

const SlideName = styled.div`
  transition: opacity .2s ease-in;
  display: ${props => props.inline ? 'inline-block' : 'block'};
  opacity: ${props => props.hidden ? 0 : 1};
`
export default Fragment
