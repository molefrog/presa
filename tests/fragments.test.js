import React from 'react'
import TestRenderer from 'react-test-renderer'
import TestContainer from './support/test-container'

import RegularFragment from '../src/components/fragment'
import Slide from '../src/components/slide/slide-decl'

// Create TestFragment: it does not render content when not active
// Why? easier to test.
/* eslint-disable react/prop-types */
const Hideable = props => (props.active ? <div tag={props.children} /> : null)
const Fragment = props => <RegularFragment {...props} behaviour={Hideable} />
/* eslint-enable react/prop-types */

describe('fragments feature', () => {
  it('displays a currently active fragment and all previous', () => {
    const root = TestRenderer.create(
      <TestContainer>
        <Slide initialFragmentIndex={1}>
          <Fragment index={0}>visible</Fragment>
          <Fragment index={1}>visible</Fragment>
          <Fragment index={2}>not yet visible</Fragment>
        </Slide>
      </TestContainer>
    ).root

    expect(root.findAllByProps({ tag: 'visible' }).length).toEqual(2)
    expect(root.findAllByProps({ tag: 'not yet visible' }).length).toEqual(0)
  })

  it('supports fragments defined on any level', () => {
    const root = TestRenderer.create(
      <TestContainer>
        <Slide initialFragmentIndex={0}>
          <div>
            <Fragment index={0}>visible</Fragment>
          </div>
          <div>
            <p>
              <Fragment index={1}>not visible</Fragment>
            </p>
          </div>
        </Slide>
      </TestContainer>
    ).root

    expect(root.findAllByProps({ tag: 'visible' }).length).toEqual(1)
    expect(root.findAllByProps({ tag: 'not visible' }).length).toEqual(0)
  })

  it('auto assigns indexes to fragments by their order', () => {
    const root = TestRenderer.create(
      <TestContainer>
        <Slide initialFragmentIndex={0}>
          <div>
            <Fragment>visible</Fragment>
          </div>
          <div>
            <p>
              <Fragment>not visible</Fragment>
            </p>
          </div>
        </Slide>
      </TestContainer>
    ).root

    expect(root.findAllByProps({ tag: 'visible' }).length).toEqual(1)
    expect(root.findAllByProps({ tag: 'not visible' }).length).toEqual(0)
  })
})
