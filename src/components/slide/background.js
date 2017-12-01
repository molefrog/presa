import React from 'react'
import styled from 'styled-components'

export const backgroundFor = props => {
  const { background, fade } = props
  const ownProps = { background, fade }

  if (!background) {
    return null
  }

  // React element passed, simply return it
  // This allows to specify custom background components.
  if (React.isValidElement(background)) {
    return background
  }

  if (typeof background === 'string') {
    // It's an image url
    const imgRx = /\.(jpe?g|gif|png|bmp|svg)$/i

    if (background.match(imgRx)) {
      return <PlainBackground {...ownProps} image={background} />
    } else {
      // Interpret background as a value for
      // `background` css property.
      return <PlainBackground {...ownProps} raw={background} />
    }
  }

  const invalidTypeWarn =
    'Invalid `background` prop passed. It can be either a ' +
    'string (e.g. `blue` or `http://foo.io/image.jpg`) or ' +
    'a valid React element.'

  console.warn(invalidTypeWarn)
  return null
}

const PlainBackground = styled.div`
  width: 100%;
  height: 100%;

  ${props => props.raw && `background: ${props.raw}`};

  /*
    This linear gradient hack makes it possible to
    use an overlay together with the background image.
  */
  ${props =>
    props.image &&
    `background: linear-gradient(
      rgba(0, 0, 0, ${props.fade || 0.0}),
      rgba(0, 0, 0, ${props.fade || 0.0})
    ), url(${props.image}) center center / cover no-repeat`};
`
