import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { backgroundFor } from './background'

class Slide extends Component {
  static propTypes = {
    onBackgroundChange: PropTypes.func,
    centered: PropTypes.bool
  }

  static defaultProps = {
    centered: false
  }

  componentWillMount() {
    const bgChanged = this.props.onBackgroundChange

    const backgroundEl = backgroundFor(this.props)
    bgChanged && bgChanged(backgroundEl)
  }

  render() {
    const { className, centered } = this.props

    return (
      <SlideContent className={className} centered={centered}>
        {this.props.children}
      </SlideContent>
    )
  }
}

const SlideContent = styled.div`
  width: 100%;
  height: 100%;

  font-size: ${props => props.theme.slide.baseFontSize};
  color: ${props => props.theme.slide.textColor};

  ${props =>
    props.centered &&
    `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  `};
`

export default Slide
