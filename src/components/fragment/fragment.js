import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Manager from './manager'
import styled from 'styled-components'

const OpacityBehaviour = styled.div`
  transition: opacity 0.2s ease-in;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  opacity: ${props => (props.active ? 1 : 0)};
`

class Fragment extends Component {
  static propTypes = {
    behaviour: PropTypes.any,
    index: PropTypes.number,
    manager: PropTypes.object.isRequired
  }

  static defaultProps = {
    behaviour: OpacityBehaviour
  }

  constructor(props) {
    super(props)
    this._instance = props.manager.registerFragment(props.index)
  }

  componentWillUnmount() {
    this._instance.unregister()
  }

  render() {
    const { manager, behaviour, ...restProps } = this.props
    const Behaviour = behaviour

    const isActive = manager.isIndexActive(this._instance.index)
    return <Behaviour {...restProps} active={isActive} />
  }
}

const FragmentConnected = props => (
  <Manager.Consumer>
    {args => <Fragment {...props} manager={args.manager} />}
  </Manager.Consumer>
)

export default FragmentConnected
