import React from 'react'
import styled from 'styled-components'

import SlideSwitcher from './slide-switcher'
import FullscreenToggle from './fullscreen-toggle'

const ControlsRoot = props => (
  <Controls>
    <SlideSwitcher {...props} />

    <AdditionalControls>
      <FullscreenToggle onClick={props.toggleFullscreen} />
    </AdditionalControls>
  </Controls>
)

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const AdditionalControls = styled.div`
  margin-left: 8px;
`

export default ControlsRoot
