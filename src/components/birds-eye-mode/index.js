import React from 'react'
import styled, { css } from 'styled-components'

import Controls from '../controls'
import { Slide } from '../slide'

const gridSlideWidth = 320

class NavigationMode extends React.Component {
  handleSlideClick = index => {
    this.props.switchSlide(index)
    this.props.toggleBirdsEye()
  }

  render() {
    const { slides, currentSlide } = this.props

    return (
      <Container>
        <Grid>
          {slides.map((slide, index) => (
            <SlideItem onClick={() => this.handleSlideClick(index)} key={index}>
              <SlideCard
                slide={slide}
                width={this.props.slideWidth}
                height={this.props.slideHeight}
                fitInto={{ width: gridSlideWidth }}
                isCurrent={currentSlide === index}
              />
              <SlideName>{slide.name}</SlideName>
            </SlideItem>
          ))}
        </Grid>
      </Container>
    )
  }
}

const SlideName = styled.div`
  color: ${props => props.theme.darkGrayColor};
  text-align: center;
  padding: 0px 10px;
  margin-top: 6px;
`

const SlideItem = styled.div`
  &:hover {
    ${SlideName} {
      color: black;
    }
  }
`

const SlideCard = styled(Slide)`
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.15),
    0px 1px 6px 0px rgba(0, 0, 0, 0.03)
      ${props =>
        props.isCurrent &&
        css`
      , 0px 0px 0px 3px ${props => props.theme.primaryColor};
    `};
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 32px 12px 64px 12px;
`

const Grid = styled.div`
  display: grid;

  grid-column-gap: 20px;
  grid-row-gap: 24px;
  justify-content: center;

  grid-template-columns: repeat(auto-fill, ${gridSlideWidth}px);
  grid-auto-flow: dense;
`

export default NavigationMode
