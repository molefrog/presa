import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { backgroundFor } from './background'
import { DefaultLayout, CenteredLayout } from './layouts'

class Slide extends Component {
  static propTypes = {
    onBackgroundChange: PropTypes.func,
    centered: PropTypes.bool,

    // Layout determines how content is
    // positioned on a slide
    layout: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.func
    ])
  }

  static defaultProps = {
    centered: false,
    layout: 'default'
  }

  componentWillMount() {
    const bgChanged = this.props.onBackgroundChange

    const backgroundEl = backgroundFor(this.props)
    bgChanged && bgChanged(backgroundEl)
  }

  getLayoutComponent(handle) {
    switch (handle) {
      case 'default':
        return DefaultLayout
      case 'centered':
        return CenteredLayout
    }

    // use no layout
    return null
  }

  renderWithinLayout(children) {
    let layout = this.props.layout
    const { centered } = this.props

    // Custom layout rendering function
    if (typeof layout === 'function') {
      return layout(children)
    }

    if (centered) layout = 'centered'
    const Layout = this.getLayoutComponent(layout)

    if (Layout) {
      return <Layout>{children}</Layout>
    } else {
      return children
    }
  }

  render() {
    const { className, centered } = this.props

    return (
      <SlideContent className={className} centered={centered}>
        {this.renderWithinLayout(this.props.children)}
      </SlideContent>
    )
  }
}

const SlideContent = styled.div`
  width: 100%;
  height: 100%;

  font-family: ${props => props.theme.slide.baseFont};
  font-size: ${props => props.theme.slide.baseFontSize}px;
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
