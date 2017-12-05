import React from 'react'
import PropTypes from 'prop-types'

import styled, { withTheme } from 'styled-components'
import SlideTheme from './slide-theme'
import Placeholder from './placeholder'

/*
 * The `Slide` component represents a real slide
 * instance rendered inside the slideshow.
 * Supports scaling (needed to fit the slide into a
 * specific viewport).
 */

class Slide extends React.Component {
  static propTypes = {
    // Slide settings
    slide: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,

    background: PropTypes.string,
    loaded: PropTypes.bool,
    fitInto: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  }

  static defaultProps = {
    loaded: true
  }

  constructor(props) {
    super(props)
    this.state = {
      slideBackground: null
    }
  }

  handleBackgroundChange = background => {
    this.setState({
      slideBackground: background
    })
  }

  calculateZoom() {
    const { width, height } = this.props
    const ft = this.props.fitInto

    if (!ft) return 1.0

    const fitAspect = width / height

    // These magic values help to handle edge cases:
    // when either width or height is not present.
    let aspect = (ft.width || Infinity) / (ft.height || -0)

    if (fitAspect >= aspect) {
      return ft.width / width
    } else {
      return ft.height / height
    }
  }

  render() {
    const { width, height, slide, loaded } = this.props
    const { slideBackground } = this.state

    const zoom = this.calculateZoom()
    const background =
      this.props.background || this.props.theme.slide.background

    const layerProps = {
      style: {
        width: width,
        height: height,
        transform: zoom === 1.0 ? 'none' : `scale(${zoom}, ${zoom})`,
        transformOrigin: 'top left'
      }
    }

    return (
      <Frame
        className={this.props.className}
        style={{
          width: width * zoom,
          height: height * zoom,
          background: background
        }}
      >
        {!loaded && (
          <Layer>
            <Placeholder />
          </Layer>
        )}

        {loaded &&
          slideBackground && <Layer {...layerProps}>{slideBackground}</Layer>}

        {loaded && (
          <Layer {...layerProps}>
            {React.cloneElement(slide.element, {
              onBackgroundChange: this.handleBackgroundChange
            })}
          </Layer>
        )}
      </Frame>
    )
  }
}

const Frame = styled.div`
  overflow: hidden;
  position: relative;
`

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

const ConnectedSlide = withTheme(Slide)

const SlideOuter = props => (
  <SlideTheme>
    <ConnectedSlide {...props} />
  </SlideTheme>
)

export default SlideOuter
