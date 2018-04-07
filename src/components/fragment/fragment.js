import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SlideContext from '../slide/context'
import Manager from './manager'
import styled from 'styled-components'

const OpacityBehaviour = styled.div`
  transition: opacity 0.2s ease-in;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  opacity: ${props => (props.active ? 1 : 0)};
`

class FragmentImpl extends Component {
  static propTypes = {
    behaviour: PropTypes.any
  }

  static defaultProps = {
    behaviour: OpacityBehaviour
  }

  constructor(props) {
    super(props)
    console.log('sdf')
  }

  render() {
    // const isActive = index <= fragmentIndex
    // return <Behaviour {...restProps} active={isActive} />
    return null
  }
}

class Fragment extends Component {
  constructor(props, ...rest) {
    super(props, ...rest)
  }

  render() {
    const { index, behaviour, ...restProps } = this.props

    const Behaviour = behaviour

    return (
      <Manager.Consumer>
        {manager => <FragmentImpl {...restProps} />}
      </Manager.Consumer>
    )
  }
}

export default Fragment
