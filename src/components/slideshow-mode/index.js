import React from 'react'
import styled from 'styled-components'

import Toc from './toc'
import Controls from '../controls'
import { Slide } from '../slide'

class SlideshowMode extends React.Component {
  render() {
    const { slide, showToc } = this.props

    return (
      <Slideshow>
        {showToc && <TocColumn {...this.props} />}

        <Main>
          <CurrentSlide>
            <SlideCard
              key={slide.index}
              slide={slide}
              width={this.props.slideWidth}
              height={this.props.slideHeight}
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
  padding: 20px;
  overflow: auto;
`

const SlideCard = styled(Slide)`
  overflow: hidden;
  box-shadow: 0px 5px 16px -2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const CurrentSlide = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Footer = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
`

export default SlideshowMode
