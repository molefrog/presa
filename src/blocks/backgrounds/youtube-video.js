import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export const makeQuery = (options = {}) => {
  return Object.entries(options)
    .map(pair => {
      let [k, v] = pair
      if (typeof v === 'boolean') v = Number(v)

      return `${k}=${v}`
    })
    .join('&')
}

class YoutubeVideo extends React.Component {
  static propTypes = {
    video: PropTypes.string.isRequired,
    autoplay: PropTypes.bool,
    controls: PropTypes.bool,
    loop: PropTypes.bool
  }

  static defaultProps = {
    autoplay: true,
    controls: false,
    loop: true
  }

  makeUrl() {
    const baseUrl = 'https://www.youtube.com/embed/'

    const { video } = this.props

    // controls=0&showinfo=0&rel=0&autoplay=1&loop=1
    const { controls, loop, autoplay } = this.props
    const query = makeQuery({
      showinfo: false,
      controls,
      loop,
      autoplay
    })

    return `${baseUrl}${video}?${query}`
  }

  render() {
    return <Iframe src={this.makeUrl()} frameBorder="0" allowFullScreen />
  }
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`

export default YoutubeVideo
