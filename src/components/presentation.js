import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PresentationContainer from './presentation-container'
import Fragment from '../components/fragment'

class Presentation extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  getSlideStructure() {
    const { children } = this.props

    return React.Children.map(children, slideElement => {
      return {
        name: slideElement.props.name,
        description: slideElement.props.description,

        element: slideElement,
        fragments: React.Children
          .map(slideElement.props.children, child => child)
          .filter(child => child.type === Fragment)
      }
    })
  }

  render() {
    // We assume that slides don't change over
    // application lifetime. Normally this render
    // method will only be called once.
    const slides = this.getSlideStructure()

    // All futher logic runs inside `PresentationContainer`
    return <PresentationContainer {...this.props} slides={slides} />
  }
}

export default Presentation
