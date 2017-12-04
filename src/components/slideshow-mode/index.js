import React from 'react'
import styled from 'styled-components'

import Toc from './toc'
import Controls from '../controls'
import { Slide } from '../slide'

const limitBy = (val, min, max) => Math.max(min, Math.min(val, max))

class SlideshowMode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewportWidth: props.slideWidth
    }
  }

  recalcViewport = () => {
    if (this._slideCont) {
      const original = this.props.slideWidth
      const width = this._slideCont.clientWidth
      const value = limitBy(width, original * 0.5, original)

      this.setState({
        viewportWidth: value
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showToc !== this.props.showToc) {
      this.recalcViewport()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.recalcViewport)
    this.recalcViewport()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.recalcViewport)
  }

  render() {
    const { slide, showToc } = this.props

    return (
      <Slideshow>
        {showToc && <TocColumn {...this.props} />}

        <Main>
          <CurrentSlide innerRef={el => (this._slideCont = el)}>
            <SlideCard
              key={slide.index}
              slide={slide}
              width={this.props.slideWidth}
              height={this.props.slideHeight}
              fitInto={{ width: this.state.viewportWidth }}
            />
          </CurrentSlide>

          <Footer>
            <Controls {...this.props} />
          </Footer>
        </Main>
      </Slideshow>
    )
  }
}

const TocColumn = styled(Toc)`
  flex-shrink: 0;
`

const Slideshow = styled.div`
  display: flex;
  overflow: hidden;
  flex-flow: row nowrap;
  height: 100%;
`

const Main = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  box-sizing: border-box;
  padding: 20px 24px;
  overflow: auto;
`

const SlideCard = styled(Slide)`
  overflow: hidden;
  box-shadow: 0px 5px 16px -2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-shrink: 0;
`

const CurrentSlide = styled.div`
  display: flex;
  justify-content: center;
`

const Footer = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
`

export default SlideshowMode
