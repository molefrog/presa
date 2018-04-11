import React, { Component } from 'react'
import PropTypes from 'prop-types'
import createReactContext from 'create-react-context'

import { ALL_FRAGMENTS, NO_FRAGMENTS } from './constants'
import nextIndex from './next-index'

const Context = createReactContext()

class FragmentManager extends Component {
  static Consumer = Context.Consumer

  static propTypes = {
    children: PropTypes.any,
    initialIndex: PropTypes.number
  }

  // by default all fragments are activated
  static defaultProps = {
    initialIndex: ALL_FRAGMENTS
  }

  constructor(props) {
    super(props)

    this._lastAutoIndex = -1
    this._fragments = []

    this.state = { index: props.initialIndex }
  }

  navigate(shift = 1) {
    const indexes = this._fragments.map(f => f.index)

    // no fragments found, skip
    if (!indexes.length) {
      return false
    }

    const nextValue = nextIndex(
      [NO_FRAGMENTS, ...indexes],
      this.state.index,
      shift
    )

    // switch to the next fragment in the list
    if (nextValue !== null) {
      this.setState({ index: nextValue })
      return true
    }

    // return false otherwise. a signal that
    // the next slide should be shown instead.
    return false
  }

  isIndexActive(index) {
    return index <= this.state.index
  }

  registerFragment(options = {}) {
    let index = options.index

    if (typeof index === 'undefined') {
      index = ++this._lastAutoIndex
    }

    const fragmentId = Symbol()

    const registered = {
      id: fragmentId,
      index: index,
      unregister: () => this.unregisterFragment(fragmentId)
    }

    this._fragments.push(registered)
    return registered
  }

  unregisterFragment(id) {
    // remove the fragment reference from the list
    const idx = this._fragments.findIndex(f => f.id === id)
    idx && this._fragments.splice(idx, 1)
  }

  render() {
    return (
      <Context.Provider value={{ manager: this }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default FragmentManager
