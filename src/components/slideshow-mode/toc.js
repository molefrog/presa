import React from 'react'
import styled from 'styled-components'

class Toc extends React.Component {
  render() {
    const { className, slides, currentSlide, switchSlide } = this.props

    return (
      <NavigationBody className={className}>
        <PresentationName>{this.props.presentationName}</PresentationName>

        <TableOfContents>
          {slides.map((slide, index) => (
            <SlideItem
              key={index}
              current={index === currentSlide}
              future={index > currentSlide}
              onClick={() => switchSlide(index)}
            >
              {slide.name || `Slide #${index + 1}`}
            </SlideItem>
          ))}
        </TableOfContents>
      </NavigationBody>
    )
  }
}

const NavigationBody = styled.div`
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  width: 280px;
  display: flex;
  flex-flow: column nowrap;
`

const PresentationName = styled.div`
  font-size: 26px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  flex-shrink: 0;
  padding: 15px 20px;
`

const TableOfContents = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: auto;
  padding: 15px 20px;
`

const SlideItem = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
  color: #666;
  padding: 5px 0;
  transition: padding 0.2s ease;

  &:hover {
    color: #222;
  }

  ${props =>
    props.current &&
    `
    color: black;
    padding-left: 6px;
  `} ${props =>
      props.future &&
      `
    color: #e0e0e0;
  `};
`

export default Toc
