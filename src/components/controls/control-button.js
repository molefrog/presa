import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const ControlButton = styled.button`
  /* Base geometry */
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size}px;

  /* Center the content */
  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.2s ease;

  /* Default state */
  svg {
    transition: transform 0.15s ease;
  }

  path {
    transition: fill 0.2s ease;
    fill: ${props => props.theme.darkGrayColor};
  }

  /* Hovered state */
  &:hover {
    background: rgba(0, 0, 0, 0.015);
    path {
      fill: ${props => props.theme.textColor};
    }
  }

  /* Active state */
  &:active {
    background: rgba(0, 0, 0, 0.03);
    svg {
      transform: ${props => props.activeIconTransform || 'none'};
    }
  }

  ${props =>
    props.toggled &&
    css`
      &,
      &:hover {
        path {
          fill: ${props => props.theme.primaryColor};
        }
      }
    `};

  ${props =>
    props.disabled &&
    `
    opacity: 0.2;
    pointer-events: none;
  `};
`

ControlButton.propTypes = {
  size: PropTypes.number,
  disabled: PropTypes.bool
}

ControlButton.defaultProps = {
  size: 40
}

export default ControlButton
