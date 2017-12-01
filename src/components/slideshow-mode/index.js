import React from 'react'
import styled from 'styled-components'

import Controls from '../controls'
import { Slide } from '../slide'

class SlideshowMode extends React.Component {
  render() {
    const { slide } = this.props

    return (
      <Slideshow>
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
      </Slideshow>
    )
  }
}

const SlideCard = styled(Slide)`
  overflow: hidden;
  box-shadow: 0px 5px 16px -2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const Slideshow = styled.div`
  padding: 28px;
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
