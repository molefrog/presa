import React from 'react'

import ControlGroup from './control-group'
import ControlButton from './control-button'
import { Fullscreen as FullscreenIcon } from '../../assets/icons'

const FullscreenToggle = ({ className, onClick }) => (
  <ControlGroup className={className}>
    <ControlButton onClick={onClick}>
      <FullscreenIcon />
    </ControlButton>
  </ControlGroup>
)

export default FullscreenToggle
