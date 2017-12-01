import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

class MiniProgress extends React.Component {
  static propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
  }

  static defaultProps = {
    height: 4,
    width: 40
  }

  render() {
    const { total, current, width, height } = this.props
    const percentage = total ? (current + 1) / total : 0.0

    return (
      <ProgressBox width={width} height={height}>
        <Progress style={{ width: `${percentage * 100.0}%` }} radius={height} />
      </ProgressBox>
    )
  }
}

const progressBackground = '#dddddd'

const ProgressBox = styled.div`
  height: ${props => props.height}px;
  border-radius: ${props => props.height}px;
  width: ${props => props.width}px;

  background: ${progressBackground};
  position: relative;
  overflow: hidden;
`

const Progress = styled.div`
  position: absolute;
  height: 100%;
  width: 0;
  left: 0;

  background: ${props => props.theme.primaryColor};
  border-radius: ${props => props.radius}px;
`

export default MiniProgress
