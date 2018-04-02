import React from 'react'
import TestRenderer from 'react-test-renderer'

import VideoBackground, { makeQuery } from '../src/blocks/video-background'

describe('makeQuery', () => {
  it('serializes key-value pair using 1/0 instead of bools', () => {
    expect(makeQuery({ foo: true })).toEqual('foo=1')
    expect(makeQuery({ foo: false })).toEqual('foo=0')
  })

  it('supports multiple keys', () => {
    expect(makeQuery({ foo: true, bar: 'hello' })).toEqual('foo=1&bar=hello')
  })
})

describe('VideoBackground component', () => {
  it('renders a `video` element', () => {
    const root = TestRenderer.create(<VideoBackground src="1.mp4" />).root

    expect(root.findAllByType('video').length).toEqual(1)
  })

  it('supports video attributes', () => {
    const video = <VideoBackground src="1.mp4" loop autoPlay />
    const root = TestRenderer.create(video).root

    const videoEl = root.findByType('video')

    expect(videoEl.props).toMatchObject({
      loop: true,
      autoPlay: true
    })
  })

  it('renders an iframe when src is youtube link', () => {
    const root = TestRenderer.create(
      <VideoBackground src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    ).root

    expect(root.findAllByType('iframe').length).toEqual(1)
  })

  it('supports shortened youtube links', () => {
    const root = TestRenderer.create(
      <VideoBackground src="https://youtu.be/dQw4w9WgXcQ" />
    ).root

    expect(root.findAllByType('iframe').length).toEqual(1)
  })

  it('supports `mute` prop', () => {
    const root = TestRenderer.create(
      <VideoBackground src="https://youtu.be/dQw4w9WgXcQ" mute />
    ).root

    expect(root.findByType('iframe').props.src).toMatch('mute=1')
  })
})
