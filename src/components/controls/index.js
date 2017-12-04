import React from 'react'
import styled from 'styled-components'

import SlideSwitcher from './slide-switcher'
import FullscreenToggle from './fullscreen-toggle'
import TocToggle from './toc-toggle'

const ControlsRoot = props => (
  <Controls>
    <SlideSwitcher {...props} />

    <AdditionalControls>
      <FullscreenToggle onClick={props.toggleFullscreen} />
      <TocToggle toggled={props.showToc} onClick={() => props.toggleToc()} />
    </AdditionalControls>
  </Controls>
)

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const AdditionalControls = styled.div`
  margin-left: 8px;

  > div {
    margin-right: 6px;
  }
`

export default ControlsRoot
