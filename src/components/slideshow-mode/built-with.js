import React from 'react'
import styled from 'styled-components'

import { Presa } from '../../assets/icons'

const Copyright = () => (
  <BuiltWith href="https://github.com/molefrog/presa" target="_blank">
    <PresaIcon width={18} />
    <span>
      Built with <strong>Presa.</strong>
    </span>
  </BuiltWith>
)

const PresaIcon = styled(Presa)`
  margin-right: 5px;
`

const BuiltWith = styled.a`
  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: ${props => props.theme.monoFont};

  &:hover {
    color: ${props => props.theme.primaryColor};
    ${PresaIcon} {
      path {
        stroke: ${props => props.theme.primaryColor};
      }
    }
  }
`

export default Copyright
