import React from 'react'
import PropTypes from 'prop-types'

import SlideContext from '../slide/context'
import styled from 'styled-components'

const OpacityBehaviour = styled.div`
  transition: opacity 0.2s ease-in;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  opacity: ${props => (props.active ? 1 : 0)};
`

class Fragment extends React.Component {
  static propTypes = {
    behaviour: PropTypes.any
  }

  static defaultProps = {
    behaviour: OpacityBehaviour
  }

  render() {
    const { index, behaviour, ...restProps } = this.props

    const Behaviour = behaviour

    return (
      <SlideContext.Consumer>
        {fragmentIndex => {
          const isActive = index <= fragmentIndex
          return <Behaviour {...restProps} active={isActive} />
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Fragment
