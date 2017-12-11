import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import GlobalBackground from './global-background'
import RemoteControl from './remote-control'
import FullscreenMode from './fullscreen-mode'
import SlideshowMode from './slideshow-mode'
import BirdsEyeMode from './birds-eye-mode'

// default theme for styled components
import defaultTheme from '../theme'

const modes = {
  FULLSCREEN: 'FULLSCREEN',
  SLIDESHOW: 'SLIDESHOW',
  BIRDSEYE: 'BIRDSEYE'
}

// Gets the current slide index from
// the url hash e.g. /#10
const extractIndexFromLocation = () => {
  const numbers = window.location.hash.replace(/\D/g, '')
  return parseInt(numbers) || 0
}

class Presentation extends Component {
  static propTypes = {
    name: PropTypes.string,
    aspectRatio: PropTypes.number,
    theme: PropTypes.object,
    tableOfContents: PropTypes.bool,
    useFullscreenAPI: PropTypes.bool
  }

  static defaultProps = {
    name: 'An awesome presentation',
    aspectRatio: 16.0 / 9.0,
    baseWidth: 1066.0,
    tableOfContents: false,
    useFullscreenAPI: false,
    theme: {}
  }

  constructor(props) {
    super(props)

    const currentIndex = Math.min(
      props.slides.length,
      extractIndexFromLocation()
    )

    this.state = {
      slides: props.slides,
      presentationName: props.name,
      presentMode: modes.SLIDESHOW,
      currentSlide: currentIndex,
      showToc: props.tableOfContents,

      slideWidth: props.baseWidth,
      slideHeight: props.baseWidth / props.aspectRatio
    }
  }

  shiftSlide = shift => {
    const { slides, currentSlide } = this.state

    const id = currentSlide + shift
    const limited = Math.max(0, Math.min(id, slides.length - 1))

    this.switchSlide(limited)
  }

  switchSlide = id => {
    window.location.hash = id.toString()
    this.setState({ currentSlide: id })
  }

  toggleFullscreen = goFullscreen => {
    const { useFullscreenAPI } = this.props

    if (typeof goFullscreen === 'undefined') {
      goFullscreen = !this.state.presentMode === modes.FULLSCREEN
    }

    if (goFullscreen && useFullscreenAPI) {
      const docEl = document.documentElement

      // Use browser's Fullscreen API
      if (docEl && docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen()
      }
    }

    this.setState(state => ({
      presentMode: goFullscreen ? modes.FULLSCREEN : modes.SLIDESHOW
    }))
  }

  toggleBirdsEye = () => {
    this.setState(state => ({
      presentMode:
        state.presentMode === modes.BIRDSEYE ? modes.SLIDESHOW : modes.BIRDSEYE
    }))
  }

  toggleToc = shown => {
    const visible = typeof shown === 'undefined' ? !this.state.showToc : shown

    this.setState({
      showToc: visible
    })
  }

  getConnectedState() {
    const { slides, currentSlide, presentMode } = this.state

    return {
      ...this.state,

      slide: {
        ...slides[currentSlide],
        id: currentSlide,
        index: currentSlide,
        isFirst: currentSlide <= 0,
        isLast: currentSlide >= slides.length - 1
      },

      isSlideshow: presentMode === modes.SLIDESHOW,
      isFullscreen: presentMode === modes.FULLSCREEN,
      isBirdsEye: presentMode === modes.BIRDSEYE,
      toggleFullscreen: this.toggleFullscreen,

      switchSlide: this.switchSlide,
      toggleToc: this.toggleToc,
      toggleBirdsEye: this.toggleBirdsEye,
      showNextSlide: () => this.shiftSlide(+1),
      showPrevSlide: () => this.shiftSlide(-1)
    }
  }

  render() {
    const state = this.getConnectedState()

    const theme = {
      ...defaultTheme,
      ...this.props.theme
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalContainer>
          <GlobalBackground {...state} />

          <RemoteControl
            onNext={state.showNextSlide}
            onPrev={state.showPrevSlide}
            onMute={() => null}
          />

          {state.isFullscreen && <FullscreenMode {...state} />}
          {state.isSlideshow && <SlideshowMode {...state} />}
          {state.isBirdsEye && <BirdsEyeMode {...state} />}
        </GlobalContainer>
      </ThemeProvider>
    )
  }
}

const GlobalContainer = styled.div`
  /* Fit the whole browser window */
  width: 100vw;
  height: 100vh;

  /* Setup typography */
  font-family: ${props => props.theme.baseFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  * {
    box-sizing: border-box;
  }

  color: ${props => props.theme.textColor};
`

export default Presentation
