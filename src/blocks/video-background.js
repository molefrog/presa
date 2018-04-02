import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getYouTubeId from 'get-youtube-id'

import { BaseBackground as BaseBg } from '../components/slide/background'

// Serializes a hash of settings into YouTube query
// compatible format.
// { foo: true } => foo=1
export const makeQuery = (options = {}) => {
  return Object.entries(options)
    .map(pair => {
      let [k, v] = pair
      if (typeof v === 'boolean') v = Number(v)

      return `${k}=${v}`
    })
    .join('&')
}

class VideoBackground extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    controls: PropTypes.bool,
    loop: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    autoPlay: true,
    controls: false,
    loop: true
  }

  renderYouTube(videoId) {
    const baseUrl = '//www.youtube.com/embed/'
    const { controls, loop, autoPlay, className } = this.props

    const query = makeQuery({
      autoplay: autoPlay,
      showinfo: false,
      controls,
      loop
    })

    const videoSrc = `${baseUrl}${videoId}?${query}`

    return <IFrame src={videoSrc} className={className} />
  }

  render() {
    // try to extract youtube id first
    const ytVideo = getYouTubeId(this.props.src, { fuzzy: false })

    if (ytVideo) {
      return this.renderYouTube(ytVideo)
    }

    return <Video {...this.props} />
  }
}

const IFrame = BaseBg.withComponent('iframe').extend`
  border: none;

  // when video is being loaded
  background: black;
`

const Video = BaseBg.withComponent('video')

export default VideoBackground
