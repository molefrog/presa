import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

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

    defaultBackground: PropTypes.string,
    fitInto: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  }

  static defaultProps = {
    defaultBackground: 'white'
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
    const { width, height, slide } = this.props
    const { slideBackground } = this.state

    const zoom = this.calculateZoom()

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
          background: this.props.defaultBackground
        }}
      >
        {slideBackground && <Layer {...layerProps}>{slideBackground}</Layer>}

        <Layer {...layerProps}>
          {React.cloneElement(slide.element, {
            onBackgroundChange: this.handleBackgroundChange
          })}
        </Layer>
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
`

export default Slide
